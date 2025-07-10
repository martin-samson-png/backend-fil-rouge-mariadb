import express from "express";
import {
  createPrivilegeController,
  deletePrivilegeByIdController,
  getAllPrivilegesController,
  updatePrivilegeByIdController,
} from "../privilege/privilege.controller.js";
const router = express.Router();

router.post("/", createPrivilegeController);
router.get("/", getAllPrivilegesController);
router.put("/:id", updatePrivilegeByIdController);
router.delete("/:id", deletePrivilegeByIdController);

export default router;
