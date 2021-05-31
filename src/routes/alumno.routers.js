import {Router} from 'express'

const router = Router();

import * as alumnoCtrl from '../controllers/alumno.controller'

router.get('/' , alumnoCtrl.getAlumno);

export default router;
