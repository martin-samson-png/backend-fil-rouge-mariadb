import Role from "./roles.model.js";

const createRole = async (data) => {
  return await Role.create(data);
};

const getAllRole = async () => {};
