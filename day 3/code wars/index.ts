import products from './products';
let productName :string ='fanny pack';
let product = products.filter( (products) =>products.name==productName)
console.log(product);
if (product[0].preOrder =='true'){
  console.log("your order was delivred ")
}
else {
   console.log("your order waitnig to delivred ")
}
let shipping :number 
let taxPercent : number
let taxTotal :number
let total : number
let shippingAddress :string
if (product[0].price >='25'){
  shipping =0;
  console.log("free shiping")
}
else{
  shipping = 5;
  console.log(`shpping price is: ${shipping}`)

}
 shippingAddress ="new york"
if (shippingAddress=="new york "){
  taxPercent =0.1;
  taxTotal = parseInt(product[0].price) * taxPercent
  total =  parseInt(product[0].price)+taxTotal +shipping
  console.log ("tax : " + total )

}
else {
  taxPercent =0.05 ;
    taxTotal = parseInt(product[0].price) * taxPercent
    total =  parseInt(product[0].price)+taxTotal +shipping
  console.log ("tax : "+total )
}
