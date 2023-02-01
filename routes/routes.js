import { Router } from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import { __dirname } from '../utils/utils.js';
import {
	about,
	blackMarket,
	contact,
	gallery,
	home,
	getProducts,
	register,
	login
} from '../controller/controller.js';
import User from '../models/userModel.js';

const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/black-market', blackMarket);
router.get('/gallery', gallery);
router.get('/contact', contact);
router.get('/products', getProducts);
router.get('/register', register);
router.get('/login', login);

router.post('/addProduct/:productId', (req, res) => console.log(req.params.productId));
router.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const hash = await bcrypt.hash(password, 10);
	await new User({ email, password: hash }).save();
	res.status(200)
		.cookie('token', 'TOKEN', { maxAge: 10000, signed: true })
		.json({ message: 'User registered' });
});
router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) return res.status(404).json({ message: 'User not found' });
	const hash = bcrypt.compareSync(password, user.password);
	if (hash)
		return res.status(200).cookie('token', user._id).json({ message: 'Login successful' });
	res.status(401).json({ message: 'Wrong password' });
});
router.get('/logout', (req, res) => {
	res.clearCookie('token').sendFile(path.join(__dirname, '/../public/pages/login.html'));
});

const auth = (req, res, next) => {};

export default router;
