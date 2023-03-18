import { Router } from "express";
const router = Router()

import * as userCTRL from '../controllers/user.controller'

router.get('/', userCTRL.getUsers)

export default router