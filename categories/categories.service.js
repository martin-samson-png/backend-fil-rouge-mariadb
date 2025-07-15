import Categorie from "./categories.model.js";

const createCategorie = async (data) => {
  return await Categorie.create(data);
};

const getAllCategories = async () => {
  return await Categorie.find();
};

const updateCategorieById = async (categorie_id, update) => {
  return await Categorie.updateOne(
    { _id: categorie_id },
    { $set: update },
    { new: true }
  );
};

const deleteCategorieById = async (categorie_id) => {
  const categorie = await Categorie.findById(categorie_id);
  if (!categorie) {
    return null;
  }
  return await categorie.deleteOne();
};

export {
  createCategorie,
  getAllCategories,
  updateCategorieById,
  deleteCategorieById,
};
