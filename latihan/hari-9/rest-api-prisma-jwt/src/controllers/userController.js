const { PrismaClient } = require("../../generated/prisma")
const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



exports.register = async (req, res)=> {
    let { email, name, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
        },
      });

      res.status(201).json({
        data: { id: newUser.id, email: newUser.email, name: newUser.name },
        message: "Berhasil registrasi",
      });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan server" });
    }
}

exports.login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Email tidak ditemukan" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password salah" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      data: { id: user.id, email: user.email, name: user.name,  token },
      message: "Berhasil login",
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};