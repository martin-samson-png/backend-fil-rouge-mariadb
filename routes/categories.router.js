import express from "express";
import categoryController from "../controllers/categories.controller.js";
const router = express.Router();

router.post("/", (req, res) => categoryController.createCategory(req, res));
router.get("/", (req, res) => categoryController.getAllCategories(req, res));
router.put("/:id", (req, res) => categoryController.updateCategory(req, res));

export default router;
