const ProductManager = require("./productManager");
const newProductManager = new ProductManager("./data/productos.json")


const carOil1 = new ProductManager("Shell", "Helix", 6000, "img", "#1ABC", 26)
const carOil2 = new ProductManager( "Liqui Moly", "Ceratec", 11000, "img", "#2ABC", 13)
