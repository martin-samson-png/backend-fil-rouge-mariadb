import {
  createCategorie,
  getAllCategories,
  updateCategorieById,
  deleteCategorieById,
} from "./categories.service.js";

const createCategorieController = async (req, res) => {
  try {
    const { categorie } = req.body;
    if (!categorie) {
      return res.status(400).json({ message: "Missing data" });
    }
    const newCategorie = await createCategorie({
      categorie: categorie.toLowerCase(),
    });
    res.status(201).json(newCategorie);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Existing categorie" });
    }
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    res.json(allCategories);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const updateCategorieByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;
    if (!id) {
      return res.status(400).json({ message: "Id is not valid" });
    }
    if (!update) {
      return res.status(400).json({ message: "Missing data" });
    }
    await updateCategorieById(id, update);
    res.json({ message: "Categorie updated" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

const deleteCategorieByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Id is not valid" });
    }
    await deleteCategorieById(id);
    res.json({ message: "Privilege deleted" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur: ", error: err.message });
  }
};

export {
  createCategorieController,
  getAllCategoriesController,
  updateCategorieByIdController,
  deleteCategorieByIdController,
};
