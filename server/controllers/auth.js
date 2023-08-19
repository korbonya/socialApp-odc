import User from "../models/user.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { lastName, firstName, email, password } = req.body;
  // find if user already exists
  const user_exists = await User.findOne({ email });
  if (user_exists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    lastName,
    firstName,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json({ user: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user

export const login = async (req, res) => {
  const { email, password } = req.body;
  // find user in db
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  } else {
    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
        // sign jwt
        const token = jwt.sign({ id: user._id , email: user.email }, process.env.JWT_SECRET,
            { expiresIn: "1h" });
      res.status(200).json({ message: "Login successful", user,token });
    }
  }
};
