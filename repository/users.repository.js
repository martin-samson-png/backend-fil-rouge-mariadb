import User from "../models/users.model.js";

class UserRepository {
  async findUserByEmail(email) {
    try {
      return await User.findOne({ email: email });
    } catch (err) {
      throw new Error("Erreur lors de la récuperation de l'utilisateur", err);
    }
  }

  async createUser({ username, email, password }) {
    try {
      const newUser = new User({ username, email, password });
      await newUser.save();
      return newUser;
    } catch (err) {
      throw new Error("Erreur lors de la création de l'utilisateur", err);
    }
  }

  async getUsers() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error("Erreur lors de la recupération des utilisateurs", err);
    }
  }
  async getUserById(id) {
    try {
      return await User.findById(id);
    } catch (err) {
      throw new Error("Erreur lors de la récuperation de l'utilisateur", err);
    }
  }
  async updateUserById(id, update) {
    try {
      return await User.findByIdAndUpdate(id, { $set: update }, { new: true });
    } catch (err) {
      throw new Error("Erreur lors de la mise à jour de l'utilisateur", err);
    }
  }
  async deleteUserById(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (err) {
      throw new Error("Erreur lors de la suppression de l'utilisateur", err);
    }
  }
}

export default new UserRepository();
