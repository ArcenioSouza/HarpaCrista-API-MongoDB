import { Router } from "express";
import HinosController from "../controllers/HinosController.js";

const router = Router();

router.get("/hinos", HinosController.getAllHinos)

router.get("/hinos/number/:number", HinosController.getNumberHino)

router.get("/hinos/title/:title", HinosController.getTitleHino)

router.get("/hinos/chorusExcerpt/:chorus", HinosController.getChorusHino)

export default router;