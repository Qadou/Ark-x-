const home =  (req, res) => {
    res.send("<h1 style = color:orangered >welcome to daily challange 17</h1>")
}
let produit =[
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];
const getProduct = (req, res) => {
    res.send(produit)}

const addProduct =  (req, res) => {
    const z = produit.length + 1;
    const x = req.body.name; // Use req.body to access form data
    const y = req.body.price;
    produit.push({ id: z, name: x, price: y });
    res.send(produit);}

const filterProduct =  (req, res) => {
    const min = req.query.a
    const max = req.query.b
    let filter = produit.filter(pro => pro.price >= min && pro.price <= max)
    res.send(filter)
            
        }

const searchProduct =  (req, res) => {
    const x= req.params.id;
    let filter = produit.filter(pro => pro.id == x)
        res.send(filter)
    
        }

const modifyProduct =  (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const index = produit.findIndex(product => product.id === id);
  
    if (index !== -1) {
      produit[index] = { ...produit[index], name, price };
      res.json(produit[index]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
          }

const deleteProduct =  (req, res) => {
    const id = parseInt(req.params.id);
    const index = produit.findIndex(product => product.id === id);
  
    if (index !== -1) {
      produit.splice(index, 1);
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  };
  module.exports ={
    home,
    getProduct,
    addProduct,
    filterProduct,
    searchProduct,
    modifyProduct,
    deleteProduct
  }
