import { Category } from "../modal/category.schema.js";

export const createCategory = async (req, res, next) => {
    try {
        const { categoryName, category } = req.body;


        if (!categoryName || !category) {
            return res.status(400).json({
                message: "categoryName is required",
            });
        }

        const data = await Category.create({
            categoryName: name,
        });

        return res.status(201).json({
            message: "Category created successfully",
            data: {
                _id: data._id,
                categoryName: data.categoryName,
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
        const data = await Category.find();
        if (data.length === 0) {
            return res.status(400).json({
                message: "category not found",
            });
        }
        return res.status(200).json({
            data,

        });

    } catch (err) {
        return res.status(500).json({
            message: err.message,

        });
    }
};
