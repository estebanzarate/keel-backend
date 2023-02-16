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
	getProducts,
	admin
} from '../controller/controller.js';
import User from '../models/userModel.js';
import { isAdmin, isAuth } from './authMiddleware.js';

const router = Router();

router.get('/about', about);
router.get('/black-market', blackMarket);
router.get('/gallery', gallery);
router.get('/contact', contact);
router.get('/register', register);
router.get(
	'/login',
	(req, res, next) => {
		if (req.user) res.redirect('/black-market');
		next();
	},
	login
);
router.get('/products', getProducts);
router.get('/cart', isAuth, async (req, res) => {
	const { cart } = await User.findOne({ email: req.user.email });
	res.status(200).json({ message: 'Logged successfully', cart });
});
router.get('/logout', (req, res, next) => {
	req.logout(error => next(error));
	res.redirect('/login');
});
router.get('/admin', isAdmin, admin);

router.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) return res.status(409).json({ error: 'Email already registered' });
	await new User({ email, password: createHash(password) }).save();
	res.status(200).json({ message: 'User registered' });
});

router.post(
	'/login',
	passport.authenticate('local'),
	(error, req, res, next) => error && res.status(401).json({ message: error })
);

router.get('/logout', (req, res) => {
	res.status(200).json({ message: 'Logout' });
});

export default router;
