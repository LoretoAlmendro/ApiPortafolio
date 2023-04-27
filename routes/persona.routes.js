import { Router } from "express";
import { getPerson, createPerson, updatePerson, deletePerson } from "../controllers/persona.controller.js";

const router = Router();

router.get('/person', getPerson);
router.post('/person', createPerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);
router.get('/person/:id');

export { router as personRoutes };