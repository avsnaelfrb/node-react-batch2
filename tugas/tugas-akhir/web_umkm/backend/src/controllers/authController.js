import prisma from "../config/prismaConfig.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let userExist;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    
    if (userExist) {
      return res.status(401).json({ message: "Email sudah terdaftar" });
    } else {
      await prisma.user.findUniqueOrThrow({
        where: { email },
      });
    }

    return res.status(201).json({
      data: {
        newUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const login = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await prisma.user.findUnique({ where : {email} })
        const comparePassword = await bcrypt.compare(password, user.password)
        if (user && comparePassword) {
            res.status(201).json({ message: "berhasil login", data: {
                name : user.name,
                email,
                role: user.role,
                token : generateToken(user.id)
            } })
        } else {
            res.status(401).json({  message: "email atau sandi salah" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

