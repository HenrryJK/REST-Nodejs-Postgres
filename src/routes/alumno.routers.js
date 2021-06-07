import {Router} from 'express'

const router = Router();

import * as alumnoCtrl from '../controllers/alumno.controller'

router.get('/' , alumnoCtrl.readAllAlumnos);
router.get('/:id' , alumnoCtrl.readAlumno);
router.delete('/:id' , alumnoCtrl.delAlumno);
router.post('/', alumnoCtrl.createAlumno);
router.put('/:id' , alumnoCtrl.updateAlumno);
export default router;
