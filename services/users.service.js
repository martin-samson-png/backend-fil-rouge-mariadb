import UserRepository from "../repository/users.repository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async findUserByEmail(email) {
    try {
      return await this.userRepository.findUserByEmail(email);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async createUser({ username, email, password }) {
    try {
      const user = await this.findUserByEmail(email);
      if (user) {
        throw new Error("Utilisateur existant");
      }
      const hashPassword = await argon2.hash(password, {
        type: argon2.argon2id,
      });
      const newUser = await this.userRepository.createUser({
        username,
        email,
        password: hashPassword,
      });

      return newUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async logInUser({ email, password }) {
    try {
      const user = await this.findUserByEmail(email);
      const isPasswordValid = await argon2.verify(user.password, password);

      if (!user || !isPasswordValid) {
        throw new Error("Utilisateur non trouvé");
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return { token, user: { username: user.username, email: user.email } };
    } catch (err) {
      throw new Error("Erreur lors de la connection de l'utilisateur", err);
    }
  }

  async getUsers() {
    try {
      return await this.userRepository.getUsers();
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getUserById(id) {
    try {
      return await this.userRepository.getUserById(id);
    } catch (err) {
      throw new Error(err);
    }
  }
  async updateUserById(id, update) {
    try {
      const updatedUser = await this.userRepository.updateUserById(id, update);
      if (!updatedUser) throw new Error("Utilisateur non trouvé");
      return updatedUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async deleteUserById(id) {
    try {
      const deletedUser = await this.userRepository.deleteUserById(id);
      if (!deletedUser) throw new Error("Utilisateur non trouvé");
      return deletedUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new UserService(UserRepository);
