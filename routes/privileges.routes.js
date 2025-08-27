import express from "express";

const privilegeRoutes = (privilegeController) => {
  const router = express.Router();

  router.post("/", (req, res, next) =>
    privilegeController.createPrivilege(req, res, next)
  );
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

  return router;
};

export default privilegeRoutes;
