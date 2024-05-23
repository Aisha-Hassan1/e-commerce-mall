const express = require('express');
const router = express.Router();
const cors = require('cors');
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // تحديد الموقع الذي يُسمح له بالوصول
    optionsSuccessStatus: 200 // برمز الحالة الناجحة المرسلة بعد الطلب الـ preflight
  };
  

const productController = require('../controllers/productController');




router.route('/:userName')
    .get(productController.getAllProducts)    
    .post(productController.addNewProduct);

router.route('/:productId')
    .get(productController.getSingleProduct)

router.route('/:productId/:userName')    
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)


module.exports = router;

