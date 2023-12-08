import { Router } from 'express';
import { authenticate, register, session } from '../controllers/usuario.controller';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/session_active', checkAuth , session);
router.post('/authenticate', authenticate);
router.post('/register',  register);

export { router };