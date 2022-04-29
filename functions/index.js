const functions = require("firebase-functions");

// const faker = require("faker");

const products = [];

const LIMIT = 100;

for (let index = 0; index < LIMIT; index++) {
    products.push({
        name: 'NAME',
        price: "PRICE",
    });
}

module.exports.helloProduct = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send(products);
});
