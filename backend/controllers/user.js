import asyncHandler from "express-async-handler";

import UserModal from "../model/user.js";
import generateToken from "../utils/generateToken.js";

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModal.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  const userExists = await UserModal.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      error: "Passwords do not match",
    });
  }

  const user = await UserModal.create({
    name: `${firstName} ${lastName}`,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};
