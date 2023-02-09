import path from 'path';
import { __dirname } from '../utils/utils.js';
import Product from '../models/productModel.js';

const home = (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html'));
const about = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/about.html'));
const blackMarket = (req, res) =>
	res.sendFile(path.join(__dirname, '/../public/pages/black-market.html'));
const gallery = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/gallery.html'));
const contact = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/contact.html'));
const register = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/register.html'));
const login = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/login.html'));

export { home, about, blackMarket, gallery, contact, getProducts, register, login };
