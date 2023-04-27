import { Router } from "express";
import { getComuna, createComuna } from "../controllers/comuna.controller.js";

const router = Router();

router.get('/comuna', getComuna);
router.post('/comuna', createComuna);
router.put('/comuna/:id');
router.delete('/comuna/:id');
router.get('/comuna/:id');

export { router as comunaRoutes };