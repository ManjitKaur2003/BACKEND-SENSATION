import jwt from "jsonwebtoken";

export const genToken = async (id, username, email) => {
    const token = await jwt.sign({ id, username, email }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
    return token

};


