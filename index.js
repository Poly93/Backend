const products = []

class ProductManager {
    static id = 1
    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        ProductManager.id
    }

    addProducts() {
        let product = ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id:ProductManager.id
        })
        
    const verifyingCode = products.find(element => element.code === product.code)

        if(verifyingCode) {
            console.log("ERROR!!")
        } else {
            products.push(product)
            ProductManager.id++
            }

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            throw new Error("All fields required");
            }    
    }
}

    const getProducts = () =>  {
        console.log(products)
    }

    const getProductsById = (id) => {
        const searching = products.find(product => product.id === id)
        
        if (searching == undefined) {
            console.log( "Product Not Found!.")
        } else {
            console.log(searching)
            }
    }
    
    const carOil1 = new ProductManager("Shell", "Helix", 6000, "img", "#1ABC", 26)
    const carOil2 = new ProductManager( "Liqui Moly", "Ceratec", 11000, "img", "#2ABC", 13)

    carOil1.addProducts()
    carOil2.addProducts()

    getProducts()
    // getProductsById()