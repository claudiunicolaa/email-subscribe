"use strict";

module.exports.hello = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({ "hello": "world" }),
    };
};