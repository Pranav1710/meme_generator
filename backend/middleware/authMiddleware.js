import jwt from "jsonwebtoken";
import acyncHandler from "express-async-handler";
import User from "../models/UserModel.js";

const protect = acyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        req.user = await User.findById(decoded.id).select("-password");
      }
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("not Authorized , token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
  next();
});

export { protect };
