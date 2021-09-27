import * as homeController from '@/controller/home';

import { Router } from 'express';

const router = Router();

router.get('/', homeController.getAppInfo);
router.get('/pesquisaImagem', homeController.searchImagemByName);

export default router;
