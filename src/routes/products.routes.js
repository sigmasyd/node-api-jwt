import { Router } from "express";
const router = Router()

import * as productsCTRL from "../controllers/products.controller";

router.post('/', productsCTRL.createProduct)

router.get('/', productsCTRL.getProducts)

router.get('/:productId', productsCTRL.getProductById)

router.put('/:productId', productsCTRL.updateProductsByID)

router.delete('/:productId', productsCTRL.deleteProductsByID)

export default router