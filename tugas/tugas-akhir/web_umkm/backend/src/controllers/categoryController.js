import prisma from "../config/prismaConfig.js";

export const getCategory = async (req, res) => {
  try {
    const data = await prisma.category.findMany();
    res.status(201).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryExist = await prisma.category.findUnique({ where: { name } });
    if (categoryExist) {
      return res.status(401).json({ message: "categori tersebut sudah ada" })
    } else {
      const newCategory = await prisma.category.create({
        data: { name },
      });
      return res.status(201).json({ message: "kategori berhasil ditambahkan", data: newCategory })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

export const getCategoryById = async(req, res) => {
  const { id } = req.params
  try {
    const getId = await prisma.category.findUnique({
      where : { 
        id : Number(id) 
      }
    })
    res.status(201).json({ data: getId })
  } catch(error) {
    res.status(500).json({ message: error.message, data: getId })
  }
}

export const updateCategory = async(req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updateData = await prisma.category.update({
      where : {
        id : parseInt(id)
      },
      data : {
        name
      }
    })
    res.status(201).json({ message: "Kategori berhasil diupdate", data: updateData })
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCategory = async(req, res) => {
  const { id } = req.params;
  try {
    const deleteData = await prisma.category.delete({
      where : {
        id : Number(id)
      }
    })
    res.status(201).json({ message: "berhasil menghapus kategori", data: deleteData })
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}