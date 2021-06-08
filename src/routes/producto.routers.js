import {Router} from 'express'

const router = Router();

import * as  ProductoCtrl from '../controllers/producto.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/' , checkToken , ProductoCtrl.readAllProductos );
router.get('/:id',checkToken ,ProductoCtrl.readProducto );
router.delete('/:id', checkToken ,ProductoCtrl.delProducto );
router.post('/' , checkToken,ProductoCtrl.createProducto );
router.put('/:id', checkToken ,ProductoCtrl.updateProducto );
export default router;