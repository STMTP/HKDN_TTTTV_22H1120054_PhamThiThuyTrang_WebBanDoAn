import productModel from '../models/productModels.js'
import {v2 as cloudinary} from 'cloudinary'

const addProduct = async(req,res) => {
    try {
        const {name, price, description, category} = req.body

        const image = req.file;

        if(!image){
            return res.json({success:false, message: "Please upload an image"})
        }

        let result = await cloudinary.uploader.upload(image.path, {resource_type: 'image'})

        const productData = {
            name, description, category, price: Number(price),
            image: result.secure_url,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData)
        await product.save();

        res.json({success:true, message:"Product added successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Could not add product"})

    }
}

const listProduct = async(req,res) => {
    try {

    } catch (error) {

    }
}

const removeProduct = async(req,res) => {
    try {

    } catch (error) {

    }
}

const singleProduct = async(req,res) => {
    try {

    } catch (error) {

    }
}

export {addProduct, listProduct, removeProduct, singleProduct}