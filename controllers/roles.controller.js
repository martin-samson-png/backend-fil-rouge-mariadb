import RoleService from "../services/roles.service.js";

class RoleController {
  constructor(roleService) {
    this.roleService = roleService;
  }

  async createRole(req, res) {
    try {
      const { name, idsPrivilege } = req.body;
      if (!name || !idsPrivilege) {
        res.status(400).json({ message: "Missing data" });
      }
      const newRole = await this.roleService.createRole({ name, idsPrivilege });
      res.status(201).json(newRole);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getRoleById(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Missing data" });
      }
      const role = await this.roleService.getRoleById(id);
      res.status(200).json(role);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateRoleById(req, res) {
    const { id } = req.params;
    const update = req.body;
    try {
      const updated = await this.roleService.updateRoleById(id, update);
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteRoleById(req, res) {
    const { id } = req.params;
    try {
      await this.roleService.deleteRoleById(id);
      res.status(200).json({ message: "Role deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new RoleController(RoleService);
