/*! conditionizr v4.5.1 | (c) 2015 @toddmotto, @markgdyr | https://github.com/conditionizr */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.conditionizr = factory();
  }
})(this, function () {

  'use strict';

  var conditionizr = {};
  var assets;

  conditionizr.config = function (config) {
    assets = config.assets || '';
    for (var prop in config.tests) {
      conditionizr[prop] && load(prop, config.tests[prop]);
    }
  };

  conditionizr.add = function (prop, fn) {
    conditionizr[prop] = typeof fn === 'function' ? fn() : fn;
  };

  conditionizr.on = function (prop, fn) {
    (conditionizr[prop] || /^!/.test(prop) && !conditionizr[prop.slice(1)]) && fn();
  };

  conditionizr.load = conditionizr.polyfill = function (file, props) {
    for (var i = props.length; i--;) {
      conditionizr[props[i]] && load(file, [/\.js$/.test(file) ? 'script' : 'style'], true);
    }
  };

  function load (prop, tasks, external) {
    for (var i = tasks.length; i--;) {
      run(tasks[i]);
    }
    function run (task) {
      var file;
      var path = external ? prop : assets + prop + (task === 'style' ? '.css' : '.js');
      switch (task) {
      case 'script':
        file = document.createElement('script');
        file.src = path;
        break;
      case 'style':
        file = document.createElement('link');
        file.href = path;
        file.rel = 'stylesheet';
        break;
      case 'class':
        document.documentElement.className += ' ' + prop;
        break;
      }
      !!file && (document.head || document.getElementsByTagName('head')[0]).appendChild(file);
    }
  }

  return conditionizr;

});