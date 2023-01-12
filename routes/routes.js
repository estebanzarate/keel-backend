import { Router } from 'express';
import { __dirname } from '../utils/utils.js';

import {
	about,
	blackMarket,
	contact,
	gallery,
	home,
	register,
	registerUser
} from '../controller/controller.js';

const router = Router();

router.get('/', home);
router.get('/about', about);
router.get('/black-market', blackMarket);
router.get('/gallery', gallery);
router.get('/contact', contact);
router.get('/register', register);

router.post('/register', registerUser);

export default router;
