import User from "./users.model.js";

const getAllUsers = () => User.find();

const getUserById = (id) => User.findById(id);

const createUser = async (data) => {
  const { name, email, password, role } = data;

  if (!name || !email || !password) {
    throw new Error("Tous les champs sont obligatoires");
  }

  const existing = await User.findOne({ email });
  if (existing) throw new Error("Email déjà utilisé");

  const validRoles = ["invité", "admin", "modérateur"];
  const assignedRole = role || "invité";
  if (!validRoles.includes(assignedRole)) {
    throw new Error("Rôle invalide");
  }

  const user = new User({ name, email, password, role: assignedRole });
  return user.save();
};

const deleteUserById = async (id) => {
  return User.findByIdAndDelete(id);
};

const updateUser = async (id, updates) => {
  if (updates.email) {
    const existing = await User.findOne({ email: updates.email });
    if (existing && existing._id.toString() !== id) {
      throw new Error("Email déjà utilisé");
    }
  }

  if (updates.role) {
    const validRoles = ["invité", "admin", "modérateur"];
    if (!validRoles.includes(updates.role)) {
      throw new Error("Rôle invalide");
    }
  }

  return User.findByIdAndUpdate(id, updates, { new: true });
};

export { getAllUsers, getUserById, createUser, deleteUserById, updateUser };
