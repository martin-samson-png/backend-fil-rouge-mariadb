import Category from "../models/categories.model.js";
import Role from "../models/roles.model.js";
import Privilege from "../models/privilege.model.js";

const seedCategory = async () => {
  try {
    await Category.deleteMany({});
    const category = [{ name: "Maps" }, { name: "Mobs" }, { name: "Loots" }];
    await Category.insertMany(category);
  } catch (err) {
    console.error("Error seeding categories", err);
  }
};

const seedPrivilege = async () => {
  try {
    await Privilege.deleteMany({});

    const privilege = [{ name: "read" }, { name: "delete" }, { name: "write" }];
    await Privilege.insertMany(privilege);
  } catch (err) {
    console.error("Error seeding categories", err);
  }
};

const seedRole = async () => {
  try {
    await Role.deleteMany({});

    const read = await Privilege.findOne({ name: "read" });
    const write = await Privilege.findOne({ name: "write" });
    const del = await Privilege.findOne({ name: "delete" });

    const role = [
      { name: "administrator", idsPrivilege: [read._id, write._id, del._id] },
      { name: "moderator", idsPrivilege: [read._id, write._id, del._id] },
      { name: "writer", idsPrivilege: [read._id, write._id, del._id] },
      { name: "user", idsPrivilege: [read._id, write._id] },
      { name: "guest", idsPrivilege: [read._id] },
    ];
    await Role.insertMany(role);
  } catch (err) {
    console.error("Error seeding roles", err);
  }
};

export { seedCategory, seedRole, seedPrivilege };
