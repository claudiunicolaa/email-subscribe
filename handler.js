"use strict";

const validator = require("email-validator");

const gSheet = require("./src/googleSheet");

module.exports.run = async (event) => {
    const body = JSON.parse(event.body);
    // todo: check if valid email
    if (!body || !body.hasOwnProperty("email") || !validator.validate(body.email)) {
        return {
            statusCode: 422,
            body: JSON.stringify({ "error": "Unprocessable Entity" }),
        };
    }

    const firstSheet = (await gSheet.getGSheet()).sheetsByIndex[0];
    await firstSheet.addRow([body.email]);

    return {
        statusCode: 200,
        body: JSON.stringify({ "sheet_name": gSheet.title }),
    };
};
