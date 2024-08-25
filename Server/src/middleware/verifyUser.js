import jwt from "jsonwebtoken";
import { user } from "../model/user_model.js";

export const VerifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log(" Auth header from frountend :", authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRECT_KEY, async (err, payload) => {
      try {
        if (err) {
          return res.status(401).json({ error: "Unauthrized token" });
        }
        const User = await user
          .findOne({ _id: payload._id })
          .select("-password");
        req.user = User;
        next();
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    });
  } else {
    return res.status(403).json({ error: "Forbidden" });
  }
};
