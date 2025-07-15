import express from "express";
import {
  createCategorieController,
  getAllCategoriesController,
  updateCategorieByIdController,
  deleteCategorieByIdController,
} from "../categories/categories.controller.js";
const router = express.Router();

router.post("/", createCategorieController);
router.get("/", getAllCategoriesController);
router.put("/:id", updateCategorieByIdController);
router.delete("/:id", deleteCategorieByIdController);

export default router;
