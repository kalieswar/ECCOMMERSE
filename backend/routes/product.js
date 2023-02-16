const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviews, deleteReview } = require('../controllers/productController');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/authenticate');

router.route('/products').get(getProducts);



router.route('/product/:id')
                            .get(getSingleProduct)
                            .put(updateProduct)
                            .delete(deleteProduct)
router.route('/review').put(isAuthenticatedUser, createReview)
                        .delete(isAuthenticatedUser,deleteReview)
router.route('/reviews').get(isAuthenticatedUser, getReviews)

                            
 //admin routes                           
router.route('/admin/products/new').post(isAuthenticatedUser, authorizeRoles('admin'),newProduct);
module.exports = router;