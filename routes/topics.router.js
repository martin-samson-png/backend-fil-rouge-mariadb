import express from "express";
import {
  createTopicController,
  getAllTopicsController,
  updateTopicByIdController,
  deleteTopicByIdController,
} from "../topics/topics.controller.js";
const router = express.Router();

router.post("/", createTopicController);
router.get("/", getAllTopicsController);
router.put("/:id", updateTopicByIdController);
router.delete("/:id", deleteTopicByIdController);

export default router;
