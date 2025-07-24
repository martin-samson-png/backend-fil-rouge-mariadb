import express from "express";
import userController from "../controllers/users.controller.js";
import authentification from "../middleware/authentification.middleware.js";
const router = express.Router();

router.post("/", (req, res) => userController.createUser(req, res));
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
