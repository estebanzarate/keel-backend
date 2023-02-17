import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import { createHash } from '../utils/utils.js';

const getProducts = async (req, res) => {
	const products = await Product.find({});
	res.status(200).json(products);
};

const getCart = async (req, res) => {
	const { cart } = await User.findOne({ email: req.user.email });
	res.status(200).json({ message: 'Logged successfully', cart });
};

const logOut = (req, res, next) => {
	req.logout(error => next(error));
	res.redirect('/login');
};

const registerUser = async (req, res) => {
	const { email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) return res.status(409).json({ error: 'Email already registered' });
	await new User({ email, password: createHash(password) }).save();
	res.status(200).json({ message: 'User registered' });
};

const errorLogin = (error, req, res, next) => error && res.status(401).json({ message: error });

export { getProducts, getCart, registerUser, errorLogin, logOut };
