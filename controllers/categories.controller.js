import CategoryService from "../services/categories.service.js";

class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }
  async createCategory(req, res) {
    const { name } = req.body;
    try {
      const exist = await this.categoryService.isCategoryExist(name);
      if (exist) {
        return res.status(400).json({ message: "Category already exists" });
      }
      const created = await this.categoryService.createCategory({ name });
      return res.status(201).json({ created });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllCategories(req, res) {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async updateCategory(req, res) {
    const { id } = req.params;
    const update = req.body;
    try {
      const updated = await this.categoryService.updateCategory(id, update);
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      await this.categoryService.deleteCategory(id);
      res.status(200).json({ message: "Category deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new CategoryController(CategoryService);
