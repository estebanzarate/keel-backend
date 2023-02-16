import { Router } from 'express';
import passport from 'passport';
import { createHash, isValidPassword, __dirname } from '../utils/utils.js';
import {
	about,
	blackMarket,
	contact,
	gallery,
	register,
	login,
	getProducts
} from '../controller/controller.js';
import User from '../models/userModel.js';
import { isAuth } from './authMiddleware.js';

const router = Router();

router.get('/about', about);
router.get('/black-market', blackMarket);
router.get('/gallery', gallery);
router.get('/contact', contact);
router.get('/register', register);
router.get('/login', login);
router.get('/products', getProducts);
router.get('/cart', isAuth, async (req, res) => {
	const { cart } = await User.findOne({ email: req.user.email });
	res.status(200).json({ message: 'Logged successfully', cart });
});
router.get('/logout', (req, res, next) => {
	req.logout(error => next(error));
	res.redirect('/login');
});

router.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) return res.status(409).json({ error: 'Email already registered' });
	await new User({ email, password: createHash(password) }).save();
	res.status(200).json({ message: 'User registered' });
});

// async (req, res) => {
// 	const { email, password } = req.body;
// 	const user = await User.findOne({ email });
// 	if (!user) return res.status(404).json({ message: 'User not found' });
// 	const hash = isValidPassword(password, user);
// 	if (!hash) return res.status(401).json({ message: 'Wrong password' });
// 	delete user.password;
// 	req.session.user = user;
// 	res.status(200).json({ message: 'Login successful', payload: req.user });
// };

router.post('/login', passport.authenticate('local'));

router.get('/logout', (req, res) => {
	res.status(200).json({ message: 'Logout' });
});

export default router;
