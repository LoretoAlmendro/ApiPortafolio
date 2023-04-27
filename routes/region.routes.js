import { Router } from "express";
import { getRegion, createRegion } from "../controllers/region.controller.js";

const router = Router();


router.post('/region', createRegion);
router.put('/region/:id');
router.delete('/region/:id');
router.get('/region/:id');

export { router as regionRoutes };