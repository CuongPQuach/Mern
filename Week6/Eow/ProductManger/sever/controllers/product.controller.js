const { response, request } = require('express')
const Product = require('../models/product')

module.exports = {
    allProducts:  async (req,res) =>{
        try{
            const allProducts = await Product.find()
            console.log(allProducts)
            res.json(allProducts)
        }
        catch(err){
            res.status(500).json({message:'XXX Error(Find all) XXXXX', error:err})
        }
    },


    getOneProduct: async (req,res) => {
        try{
            console.log('XXXXXparamsxxxxxxx',request.params)
            const oneProduct = await Product.findById({_id:req.params.id})
            res.json(oneProduct)
        }
        catch(err){
            res.status(500).json({message: 'XXX Error(FindOne) XXXXX', error:err})
        }
    },

    createProduct: async(req,res) => {
        try{
            const newProduct = await Product.create(req.body)
            res.json(newProduct)
        }
        catch(err){
            res.status(500).json({message:'xxx Error(CreateProduct) XXX', error:err})
        }
    },
// Update Method 
    updateProduct: async(req,res) => {
        try{
            const updatedProduct  = await Product.findOneAndUpdate({_id: req.params.id} , req.body ,{new:true, runValidators: true})
            console.log('XXXXXparamsxxxxxxx',request.params)
            res.json(updatedProduct)
        }
        catch(err){
            res.status(500).json({message:'xxx Error(updating Product) XXX', error:err})
        }
    },
    






    // delete Method 
    deleteProduct: async(req,res) => {
        try{
            console.log('XXXXXparamsxxxxxxx',request.params)
            const deleteProduct = await Product.deleteOne({_id:req.params.id})
            res.json(deleteProduct)
        }
        catch(err){
            res.status(500).json({message:'xxxx Error(Delete Product) XXXX', error:err})
        }
    }
    





}