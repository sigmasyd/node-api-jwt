import { Router } from "express";
const router = Router()

import * as authCTRL from '../controllers/auth.controller'

router.get('/', authCTRL.getAuth)

export default router