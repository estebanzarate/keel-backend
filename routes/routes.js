import { Router } from 'express';
import { about, blackMarket, contact, gallery, home } from '../controller/controller.js';

const router = Router();

router.get('/', home);

router.get('/about', about);

router.get('/black-market', blackMarket);

router.get('/gallery', gallery);

router.get('/contact', contact);

export default router;
