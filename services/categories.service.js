import CategoryRepository from "../repository/categories.repository.js";

class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async createCategory({ name }) {
    try {
      return await this.categoryRepository.createCategory({ name });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async isCategoryExist(name) {
    return await this.categoryRepository.isCategoryExist(name);
  }

  async getAllCategories() {
    try {
      return await this.categoryRepository.getAllCategories();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateCategory(id, update) {
    try {
      return await this.categoryRepository.updateCategory(id, update);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteCategory(id) {
    try {
      return await this.categoryRepository.deleteCategory(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new CategoryService(CategoryRepository);
