import express from "express";
import validate from "../middleware/validate.js";
import userSchemaDTO from "../validators/user.validator.js";
import userController from "../controllers/users.controller.js";
import authentification from "../middleware/authentification.js";
const router = express.Router();

router.post("/", validate(userSchemaDTO), (req, res) =>
  userController.createUser(req, res)
);
router.post("/logIn", (req, res) => userController.logInUser(req, res));
router.post("/logOut", (req, res) => userController.logOutUser(req, res));
router.get("/auth", authentification, (req, res) =>
  userController.authentificationUser(req, res)
);
router.get("/", (req, res) => userController.getUsers(req, res));
router.get("/", (req, res) => userController.getUserById(req, res));
router.put("/", authentification, (req, res) =>
  userController.updateUserById(req, res)
);
router.delete("/", (req, res) => userController.deleteUserById(req, res));

export default router;
