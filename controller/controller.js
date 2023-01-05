import path from 'path';
import { __dirname } from '../utils/utils.js';

const home = (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html'));

const about = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/about.html'));

const blackMarket = (req, res) =>
	res.sendFile(path.join(__dirname, '/../public/pages/black-market.html'));

const gallery = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/gallery.html'));

const contact = (req, res) => res.sendFile(path.join(__dirname, '/../public/pages/contact.html'));

export { home, about, blackMarket, gallery, contact };
