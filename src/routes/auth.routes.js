import { Router } from "express";
const router = Router()

import * as authCTRL from '../controllers/auth.controller'
import { verifySignup } from "../middlewares";

router.post('/signup',[
  verifySignup.checkDuplicatedUsernameOrEmail,
  verifySignup.checkRolesExisted
], authCTRL.signUp)

router.post('/signin', authCTRL.signIn)

export default router