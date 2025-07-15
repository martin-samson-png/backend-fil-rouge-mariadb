import {
  createPrivilege,
  getAllPrivileges,
  updatePrivilegeById,
  deletePrivilegeById,
} from "./privilege.service.js";

const createPrivilegeController = async (req, res) => {
  try {
    const { privilege } = req.body;
    if (!privilege) {
      return res.status(400).json({ message: "Missing data" });
    }
    const newPrivilege = await createPrivilege({
      privilege: privilege.toLowerCase(),
    });
    res.status(201).json(newPrivilege);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Existing privilege" });
    }
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const getAllPrivilegesController = async (req, res) => {
  try {
    const allPrivileges = await getAllPrivileges();
    if (allPrivileges.length === 0) {
      return res.status(404).json({ message: "No privilege found" });
    }
    res.json(allPrivileges);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const updatePrivilegeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    if (!id) {
      return res.status(404).json({ message: "Id is not valid" });
    }
    if (!update) {
      return res.status(404).json({ message: "Missing data" });
    }
    await updatePrivilegeById(id, update);
    res.json({ message: "Privilege updated" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const deletePrivilegeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Id is not valid" });
    }
    await deletePrivilegeById(id);
    res.json({ message: "Privilege deleted" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

export {
  createPrivilegeController,
  getAllPrivilegesController,
  updatePrivilegeByIdController,
  deletePrivilegeByIdController,
};
