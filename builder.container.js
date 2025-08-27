import getPool from "./config/MariaDB.js";
import connectDB from "./config/mongoDB.js";
import PrivilegeRepository from "./repository/privileges.repository.js";
import PrivilegeService from "./services/privileges.service.js";
import PrivilegeController from "./controllers/privileges.controller.js";

const builderContainer = () => {
  let pool;
  if (process.env.DB_TYPE === "mongodb") {
    connectDB();
  } else {
    pool = getPool();
  }

  const privilegeRepository = new PrivilegeRepository(pool);
  const privilegeService = new PrivilegeService(privilegeRepository);
  const privilegeController = new PrivilegeController(privilegeService);

  return { privilegeController };
};

export default builderContainer;
