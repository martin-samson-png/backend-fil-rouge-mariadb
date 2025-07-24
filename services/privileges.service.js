import PrivilegeRepository from "../repository/privileges.repository.js";

class PrivilegeService {
  constructor(privilegeRepository) {
    this.privilegeRepository = privilegeRepository;
  }

  async createPrivilege({ name }) {
    try {
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

  async getPrivilegeById(id) {
    try {
      return await this.privilegeRepository.getPrivilegeById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updatePrivilegeById(id, update) {
    try {
      return await this.privilegeRepository.updatePrivilegeById(id, update);
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

export default new PrivilegeService(PrivilegeRepository);
