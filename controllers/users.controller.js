import UserSevice from "../services/users.service.js";

class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async createUser(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      res.status(400).json({ message: "Champs manquant" });
    try {
      const newUser = await this.userService.createUser({
        username,
        email,
        password,
      });
      console.log({
        user: { username: newUser.username, email: newUser.email },
      });

      res.status(201).json({
        message: "Utilisateur créé",
        user: { username: newUser.username, email: newUser.email },
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async logInUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Champ manquant" });
    }
    try {
      const { token, user } = await this.userService.logInUser({
        email,
        password,
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.ENV === "production",
        sameSite: "strict",
        expires: new Date(Date.now() + 3600000),
      });
      res.status(200).json({ message: "Utilisateur connecté", user });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async authentificationUser(req, res) {
    res.status(200).json({ message: "Utilisateur authentifié" });
  }

  async logOutUser(req, res) {
    try {
      res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.ENV === "production",
        sameSite: "strict",
        expires: new Date(0),
      });
      res.status(200).json({ message: "Utilisateur déconnecté" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Erreur lors de la déconnexion" });
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await this.userService.getUsers();
      res.status(200).json({
        user: {
          id: users._id,
          username: users.username,
          email: users.email,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getUserById(req, res, next) {
    try {
      const id = req.body._id;
      const user = await this.userService.getUserById(id);
      res.status(200).json({
        user: { id: user._id, username: user.username, email: user.email },
      });
    } catch (err) {
      next(err);
    }
  }

  async updateUserById(req, res) {
    const id = req.body._id;
    const update = req.body;
    const connectedId = req.userId;
    if (!id) {
      return res.status(400).json({ message: "Id manquante" });
    }
    if (!update || Object.keys(update).length === 0) {
      return res.status(404).json({ message: "Données manquante" });
    }
    if (id !== connectedId) {
      return res.status(403).json({
        message: "Vous n'avez pas les droits de modifier l'utilisateur",
      });
    }
    try {
      const updatedUser = await this.userService.updateUserById(id, update);
      res.status(200).json({
        user: {
          id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
        },
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async deleteUserById(req, res) {
    try {
      const id = req.body._id;
      if (!id) res.status(400).json({ message: "Id manquante" });
      await this.userService.deleteUserById(id);
      res.status(200).json({ message: "Utilisateur supprimé" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new UserController(UserSevice);
