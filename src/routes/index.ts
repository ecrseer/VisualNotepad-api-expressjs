import * as homeController from '@/controller/home';

import { Router } from 'express';

const router = Router();

router.get('/', homeController.getAppInfo);
router.get('/bagunca', homeController.lolita);

export default router;
