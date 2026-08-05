import { Auth } from "../modal/auth.schema.js";
export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
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
            username,
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


export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "password is incorrect"
            });
        }
        return res.status(200).json({
            message: "User Signin Successfully",
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
}
