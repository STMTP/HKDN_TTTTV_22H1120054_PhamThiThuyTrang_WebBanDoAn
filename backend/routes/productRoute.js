import express from 'express'
import { addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productControllers.js'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const productRouter = express.Router()

productRouter.post('/add', upload.single("image"), addProduct)
productRouter.get('/list', listProduct)
productRouter.post('/remove', removeProduct)
productRouter.get('/single', singleProduct)

export default productRouter
