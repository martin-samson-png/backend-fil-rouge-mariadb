import express from "express";
import RoleController from "../controllers/roles.controller.js";
const router = express.Router();

router.post("/", (req, res) => RoleController.createRole(req, res));
router.get("/:id", (req, res) => RoleController.getRoleById(req, res));
router.put("/:id", (req, res) => RoleController.updateRoleById(req, res));

export default router;
