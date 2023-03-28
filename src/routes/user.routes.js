import { Router } from "express";
const router = Router()

import * as userCTRL from '../controllers/user.controller'
import {authJwt, verifySignup} from '../middlewares'

router.post('/',[
  authJwt.verifyToken,
  authJwt.isAdmin,
  verifySignup.checkRolesExisted
] , userCTRL.createUser)

router.get('/', userCTRL.getUsers)

export default router