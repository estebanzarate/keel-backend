import path from 'path';
import { __dirname } from '../utils/utils.js';

const about = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/about.html'));
const blackMarket = (req, res) =>
	res.sendFile(path.join(__dirname, '/../public/pages/black-market.html'));
const gallery = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/gallery.html'));
const contact = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/contact.html'));
const register = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/register.html'));
const login = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/login.html'));
const admin = async (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/admin.html'));

export { about, blackMarket, gallery, contact, register, login, admin };
