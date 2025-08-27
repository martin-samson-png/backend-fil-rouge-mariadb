class PrivilegeController {
  constructor(privilegeService) {
    this.privilegeService = privilegeService;
  }

  async createPrivilege(req, res, next) {
    try {
      const { name } = req.body;
      const newPrivilege = await this.privilegeService.createPrivilege({
        name,
      });
      res.status(201).json(newPrivilege);
    } catch (err) {
      next(err);
    }
  }

  async getPrivileges(req, res) {
    try {
      const privileges = await this.privilegeService.getPrivileges();
      res.status(200).json(privileges);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getPrivilegeById(req, res) {
    try {
      const { id } = req.params;
      if (!id) res.status(400).json({ message: "Missing data" });

      const privilege = await this.privilegeService.getPrivilegeById(id);
      res.status(200).json(privilege);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async updatePrivilegeById(req, res) {
    try {
      const { id } = req.params;
      const update = req.body;
      const updatedPrivilege = await this.privilegeService.updatePrivilegeById(
        id,
        update
      );
      res.status(200).json(updatedPrivilege);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async deletePrivilegeById(req, res) {
    try {
      const { id } = req.params;
      await this.privilegeService.deletePrivilegeById(id);
      res.status(200).json({ message: "Privilege deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default PrivilegeController;
