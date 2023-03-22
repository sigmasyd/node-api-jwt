import { Router } from "express";
const router = Router()

import * as authCTRL from '../controllers/auth.controller'

router.post('/signup', authCTRL.signUp)

router.post('/signin', authCTRL.signIn)

export default router