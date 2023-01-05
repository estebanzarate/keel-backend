import { Router } from 'express';
import path from 'path';
import { __dirname } from '../server.js';

const router = Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

router.get('/about', (req, res) => res.sendFile(path.join(__dirname, '/public/pages/about.html')));

router.get('/black-market', (req, res) =>
	res.sendFile(path.join(__dirname, '/public/pages/black-market.html'))
);

router.get('/gallery', (req, res) =>
	res.sendFile(path.join(__dirname, '/public/pages/gallery.html'))
);

router.get('/contact', (req, res) =>
	res.sendFile(path.join(__dirname, '/public/pages/contact.html'))
);

export default router;
