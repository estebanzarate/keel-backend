import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import path from 'path';
import { __dirname } from '../utils/utils.js';

const home = (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html'));
const about = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/about.html'));
const blackMarket = (req, res) =>
	res.sendFile(path.join(__dirname, '/../public/pages/black-market.html'));
const gallery = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/gallery.html'));
const contact = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/contact.html'));
const register = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/register.html'));

const registerUser = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password)
		return res.status(400).json({ message: 'Email and password are required' });
	const userExists = await User.findOne({ email });
	if (userExists) return res.status(409).json({ message: 'Email already registered' });
	const salt = bcrypt.genSaltSync(10);
	const hash = await bcrypt.hash(password, salt);
	const newUser = new User({ email, password: hash });
	await newUser.save();
	res.status(200).json({ message: 'User registered' });
};

export { home, about, blackMarket, gallery, contact, register, registerUser };
