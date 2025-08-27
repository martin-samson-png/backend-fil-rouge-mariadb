class PrivilegeService {
  constructor(privilegeRepository) {
    this.privilegeRepository = privilegeRepository;
  }

  async getPrivilegeByName(name) {
    return await this.privilegeRepository.getPrivilegeByName(name);
  }

  async createPrivilege({ name }) {
    if (!name || Object.keys(name).length === 0) {
      throw new Error("ArgumentRequired");
    }
    try {
      const privilege = await this.getPrivilegeByName(name);
      if (privilege) {
        throw new Error("DataAlreadyExist");
      }
      return await this.privilegeRepository.createPrivilege({ name });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getPrivileges() {
    try {
      return await this.privilegeRepository.getPrivileges();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updatePrivilegeById(id) {
    try {
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deletePrivilegeById(id) {
    try {
      return await this.privilegeRepository.deletePrivilegeById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default PrivilegeService;
