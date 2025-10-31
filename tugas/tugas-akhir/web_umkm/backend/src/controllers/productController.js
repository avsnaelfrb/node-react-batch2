import prisma from "../config/prismaConfig.js";

export async function createProduct(req, res) {
  const { name, price, description, categoryId } = req.body;
  try {
    if (!name || !price) {
      return res.json({ message: "Field nama / harga tidak boleh kosong" });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        description,
        categoryId: Number(categoryId),
      },
    });
    res
      .status(201)
      .json({ data: newProduct, message: "Product berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const data = await prisma.product.findMany();
    res
      .status(201)
      .json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getProductById(req, res) {
  const { id } = req.params
  try {
    const data = await prisma.product.findUnique({
      where: {
        id : Number(id),
      }
    });
    res
      .status(201)
      .json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params
  try {
    const data = await prisma.product.delete({
      where: {
        id : Number(id),
      }
    });
    res
      .status(201)
      .json({ data: data , message:"berhasil menghapus data product"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params
  const { name, price, description, categoryId } = req.body
  try {
    const updateData = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        price,
        description,
        categoryId: Number(categoryId),
      }
    });
    res.status(201).json({ message: "data berhasil di update", data: updateData })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.error(error);
    
  }
}