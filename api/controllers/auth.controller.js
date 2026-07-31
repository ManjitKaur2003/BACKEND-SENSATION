import { Auth } from "../modal/auth.schema.js";
export const signup = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const isUserExsist = await Auth.findOne({ email });
        if (isUserExsist) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const user = new Auth({
            userName,
            email,
            password
        });
        await user.save();

        return res.status(200).json({
            message: "User created successfully",
            data: {
                _id: user._id,
                email: user.email,

            },
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }
};
