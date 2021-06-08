import {Router} from 'express'

const router = Router();

import * as  ProductoCtrl from '../controllers/producto.controller'

router.get('/' , ProductoCtrl.readAllProductos );
router.get('/:id' ,ProductoCtrl.readProducto );
router.delete('/:id' ,ProductoCtrl.delProducto );
router.post('/',ProductoCtrl.createProducto );
router.put('/:id' ,ProductoCtrl.updateProducto );
export default router;