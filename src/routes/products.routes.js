import { Router } from "express";
const router = Router()

import * as productsCTRL from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post('/', [
  authJwt.verifyToken,
  authJwt.isModerator
], productsCTRL.createProduct)

router.get('/', productsCTRL.getProducts)

router.get('/:productId', productsCTRL.getProductById)

router.put('/:productId', [
  authJwt.verifyToken,
  authJwt.isAdmin
], productsCTRL.updateProductsByID)

router.delete('/:productId', [
  authJwt.verifyToken,
  authJwt.isAdmin
], productsCTRL.deleteProductsByID)

export default router