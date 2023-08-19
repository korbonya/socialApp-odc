// middleware to handle authentication and authorization
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  //get token from header
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;
  try {
    if (token) {
      const splitToken = token.split(" ")[1];
      const decoded = jwt.verify(splitToken, secret);
      const { id, email } = decoded;
      req.user = { id, email };
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default protect;
