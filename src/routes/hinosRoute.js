import { Router } from "express";
import HinosController from "../controllers/HinosController.js";

const router = Router();

router.get("/hinos", HinosController.getAllHinos)

router.get("/hinos/number/:number", HinosController.getNumberHino)

router.get("/hinos/title/:title", HinosController.getTitleHino)

router.get("/hinos/chorus/:chorus", HinosController.getChorusHino)

router.post("/hinos/save", HinosController.saveHino)

router.put("/hinos/update/:id", HinosController.updateHino)

router.delete("/hinos/delete/:id", HinosController.deleteHino)

export default router;