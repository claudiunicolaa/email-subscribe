"use strict";

require("dotenv").config();
const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports.getGSheet = async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo(); // loads document properties and worksheets

    return doc;
};
