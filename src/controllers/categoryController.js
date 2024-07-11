const categoryModel = require("../models/categoryModel");

class CategoryController {
    async getall(req, res) {
        try {
            const categories = await categoryModel.getAllCategories();
            res.json(categories);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new CategoryController();
