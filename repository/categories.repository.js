import Category from "../models/categories.model.js";

class CategoryRepository {
  async createCategory({ name }) {
    try {
      const newCategory = new Category({ name });
      await newCategory.save();
      return newCategory;
    } catch (err) {
      console.error(err);
      throw new Error("Error creating category", err);
    }
  }

  async isCategoryExist(name) {
    const exist = await Category.exists({ name: name });
    return !!exist;
  }

  async getAllCategories() {
    try {
      return await Category.find();
    } catch (err) {
      console.error(err);
      throw new Error("Error while retrieving categories", err);
    }
  }

  async updateCategory(id, update) {
    try {
      return await Category.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );
    } catch (err) {
      console.error(err);
      throw new Error("Error updating category", err);
    }
  }

  async deleteCategorie(id) {
    try {
      return await Category.findByIdAndDelete(id);
    } catch (err) {
      console.error(err);
      throw new Error("Error deleting category", err);
    }
  }
}

export default new CategoryRepository();
