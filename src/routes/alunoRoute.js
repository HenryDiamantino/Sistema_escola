import { Router } from "express";
import { listar, criar, buscarPorEmail } from "../controllers/alunoController.js";

const router = Router();

router.get("/", listar);
router.get("/", buscarPorEmail);
router.post("/", criar);

export default router;