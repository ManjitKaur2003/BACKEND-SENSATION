import { Category } from "../modal/category.schema.js";

export const createCategory = async (req, res, next) => {
  try {
    const { category, name } = req.body;
    const catName = category || name;
    if (!catName || !catName.trim()) {
      return res.status(400).json({
        message: "category is required",
      });
    }
    const data = await Category.create({
      category: catName.trim(),
    });
    return res.status(201).json({
      message: "Category created successfully",
      data: {
        _id: data._id,
        category: data.category,
        name: data.category,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: data || [],
      categories: data || [],
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Category ID is required",
      });
    }

    const data = await Category.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
