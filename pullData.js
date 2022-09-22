const fs = require('fs');
var slugify = require('slugify')

const { GoogleSpreadsheet } = require('google-spreadsheet');
var serviceAccount = require("./firebase-key.json");

// Invite the user: firebase-adminsdk-o1rx4@figueroasol-com.iam.gserviceaccount.com
const SPREADSHEET_ID = '1o8STj8kO6_XmorLTj4uS3NVSSL04GHbnnBwkH-1O-n4';
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
doc.useServiceAccountAuth(serviceAccount);

const slug = (text) => slugify(text.toLowerCase())

async function pull() {
    await doc.loadInfo();
    for(var i=0; i < doc.sheetCount; i++) {
        var elements = [];
        const sheet = doc.sheetsByIndex[i];
        console.log('Downloading sheet ' + sheet.title);
        
        await sheet.loadHeaderRow();
        var rows = await sheet.getRows();

        for(var row = 0; row < rows.length; row++) {
            var element = {};
            for(var col = 0; col < sheet.headerValues.length; col++) {
                var key = sheet.headerValues[col];
                element[slug(key)] = rows[row][key];
            }
            elements.push(element);
        }
    
        let data = JSON.stringify(elements);
        fs.writeFileSync('./_data/' + slug(sheet.title) + '.json', data);
    }
}

pull();
