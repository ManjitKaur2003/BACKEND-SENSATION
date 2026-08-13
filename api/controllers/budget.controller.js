import { Budget } from "../modal/budget.schema.js";

export const createBudget = async (req, res, next) => {
  try {
    const { category, amount, month, year } = req.body;

    if (!category || !amount || !month || !year) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isBudgetExist = await Budget.findOne({
      user: req.user._id,
      caregory: category,
      month: month,
      year: year,
    });

    if (isBudgetExist) {
      return res.status(409).json({
        message: "Budget with this category is already exist",
      });
    }

    const budgetData = await Budget.create({
      user: req.user._id,
      category,
      amount,
      month,
      year,
    });

    return res.status(201).json({
      message: "Budget created successfully",
      data: budgetData,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const getBudgets = async (req, res, next) => {
  try {
    const budgets = await Budget.find().populate([
      {
        path: "user",
        select: "-password"
      },


      {
        path: "category",
      }
    ]);
    if (budgets.length === 0) {
      return res.status(404).json({
        message: "No budget found"

      })
    }
    return res.status(200).json({
      budgets,
    })

  }
  catch (error) {
    return res.status(500).json({
      message: err.message
    });
  }
};
