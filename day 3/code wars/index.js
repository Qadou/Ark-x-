"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
var product = products_1.default.filter(function (products) { return products.name == productName; });
console.log(product);
if (product[0].preOrder == 'true') {
    console.log("your order was delivred ");
}
else {
    console.log("your order waitnig to delivred ");
}
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
if (product[0].price >= '25') {
    shipping = 0;
    console.log("free shiping");
}
else {
    shipping = 5;
    console.log("shpping price is: ".concat(shipping));
}
shippingAddress = "new york";
if (shippingAddress == "new york ") {
    taxPercent = 0.1;
    taxTotal = parseInt(product[0].price) * taxPercent;
    total = parseInt(product[0].price) + taxTotal + shipping;
    console.log("tax : " + total);
}
else {
    taxPercent = 0.05;
    taxTotal = parseInt(product[0].price) * taxPercent;
    total = parseInt(product[0].price) + taxTotal + shipping;
    console.log("tax : " + total);
}
