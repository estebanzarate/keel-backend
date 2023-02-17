import { Router } from 'express';
import {
	about,
	blackMarket,
	contact,
	gallery,
	register,
	login,
	admin
} from '../controller/views.js';
import { isAdmin, isLogged } from '../middlewares/auth.js';

const router = Router();

router.get('/about', about);
router.get('/black-market', blackMarket);
router.get('/gallery', gallery);
router.get('/contact', contact);
router.get('/register', register);
router.get('/login', isLogged, login);
router.get('/admin', isAdmin, admin);

export default router;
