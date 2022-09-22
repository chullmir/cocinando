module.exports = {
    templateFormats: ["html", "md"]
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("downloads");
    eleventyConfig.addPassthroughCopy("documents");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("vendor");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addLiquidFilter("filterFAQS", function(faqs, product) {
        return faqs.filter(x => x.producto == "ALL" || product.startsWith(x.producto));
    });

    eleventyConfig.addLiquidFilter("hasPaymentOptions", function(store) {
        return ["mxn", "eur", "usd"].indexOf(store.pais) != -1;
    });

    eleventyConfig.addLiquidFilter("getFiles", function(success, products) {
        return [
            success["producto-1"],
            success["producto-2"],
            success["producto-3"],
            success["producto-4"],
            success["producto-5"],
            success["producto-6"],
            success["producto-7"],
            success["producto-8"],
            success["producto-9"],
            success["producto-10"],
        ].filter(x => x != null).map(slug => {
            return products.filter(x => x.slug == slug)[0];
        });
    });
}