import { Router } from "express";
import HinosController from "../controllers/HinosController.js";

const router = Router();

router.get("/hinos", HinosController.getAllHinos)

router.get("/hinos/number/:number", HinosController.getNumberHino)

router.get("/hinos/title/:title", HinosController.getTitleHino)

router.get("/hinos/chorusExcerpt/:chorus", HinosController.getChorusHino)

router.post("/hinos/save", HinosController.saveHino)

router.put("/hinos/update/:id", HinosController.updateHino)

export default router;