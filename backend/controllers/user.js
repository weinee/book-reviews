import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/user";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        error: "User with this email does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const register = async (req, res) => {
  const { fName, lName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords do not match",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${fName} ${lName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result,
      token,
    });
  } catch {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};
