import express from "express";
import privilegeController from "../controllers/privileges.controller.js";

const router = express.Router();

router.post("/", (req, res) => privilegeController.createPrivilege(req, res));
router.get("/", (req, res) => privilegeController.getPrivileges(req, res));
router.get("/:id", (req, res) =>
  privilegeController.getPrivilegeById(req, res)
);
router.put("/:id", (req, res) =>
  privilegeController.updatePrivilegeById(req, res)
);
router.delete("/:id", (req, res) =>
  privilegeController.deletePrivilegeById(req, res)
);

export default router;
