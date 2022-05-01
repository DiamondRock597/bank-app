const functions = require("firebase-functions");

const products = [];

const LIMIT = 10;

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

// I didn't deploy it because I should pay
//TODO: My fault I created new project for functions, but I should use existing