import { Router } from 'express';
import passport from 'passport';
import { errorLogin, getCart, getProducts, logOut, registerUser } from '../controller/index.js';
import { isAuth } from '../middlewares/auth.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

const router = Router();

router.get('/products', getProducts);
router.get('/cart', isAuth, getCart);
router.post('/addProduct', isAuth, async (req, res) => {
	const { prodId } = req.body;
	const user = await User.findById(req.user._id);
	const prod = await Product.findById(prodId);
});
router.post('/register', registerUser);
router.post('/login', passport.authenticate('local'), errorLogin);
router.get('/logout', logOut);

export default router;
