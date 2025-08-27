import getPool from "./config/mariaDB.js";
import PrivilegeRepository from "./repository/privileges.repository.js";
import PrivilegeService from "./services/privileges.service.js";
import PrivilegeController from "./controllers/privileges.controller.js";

const builderContainer = () => {
  const pool = getPool();

  const privilegeRepository = new PrivilegeRepository(pool);
  const privilegeService = new PrivilegeService(privilegeRepository);
  const privilegeController = new PrivilegeController(privilegeService);

  return { privilegeController };
};

export default builderContainer;
