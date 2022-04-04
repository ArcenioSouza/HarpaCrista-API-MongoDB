import { Router } from "express";
import hinos from "../db/hinos.js"

const router = Router();

router.get("/hinos", (req, res) => {
   res.status(200).json(hinos)
})

export default router;