import { Router } from 'express';
import { addContact, contactos, deleteContact, editContact } from '../controllers/contacto.controller';
import multerMiddleware from '../middleware/file';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/mis-contactos', checkAuth ,contactos);
router.post('/agregar_contacto', multerMiddleware.single('foto') , addContact);
router.put('/editar_contacto/:id', multerMiddleware.single('foto') , editContact);
router.delete('/borrar_contacto/:id', deleteContact);

export { router };