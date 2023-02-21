const ProductController = require ('../controllers/product.controller')


module.exports = app => {
    app.get('/api/allproduct', ProductController.allProducts)
    app.get('/api/oneproduct/:id', ProductController.getOneProduct)
    app.post('/api/postproduct', ProductController.createProduct)
    app.put('/api/updateproduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteproduct/:id', ProductController.deleteProduct)
}