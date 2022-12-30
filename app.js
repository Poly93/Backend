const express = require('express')
const ProductManager = require('./productManager.js')
const app = express()

const productManager = new ProductManager('./data/productos.json')


app.get("/products", async (req, res)=>{
    const products = await productManager.getProducts()
    const {limit} = req.query

    if (limit) return res.json(products.slice(0,limit))
    else return res.json(products)

})
app.get("/products/:pid", async (req,res)=>{
    const products = await productManager.getProducts()
    const { pid } = req.params;
    const product = products.find((product) => product.id === parseInt(pid))

    if (product) return res.status(200).json(product)
    else return res.status(404).json({message: "PRODUCT UNKNOWN"})
})

app.listen(8080, () =>{
    console.log("SERVER RUNNING GOOD ON PORT 8080")
})