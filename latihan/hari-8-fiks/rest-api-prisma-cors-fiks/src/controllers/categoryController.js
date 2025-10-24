const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.createCategories = async(req, res) => {
    let { name } = req.body;

    try {
        const category = await prisma.category.create({
            data: {
                name,
            },
        });
        res.json({
            data: category,
            message: "Category Was Succesfully Created",
            status: "success",
        });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({
            message: "Error creating category",
            status: "error",
        });
    }
    return;
};

exports.readAllCategories = async(req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json({  
            data: categories,
            message: "Categories Were Successfully Retrieved",
            status: "success",
        });
    }
    catch (error) {
        console.error("Error retrieving categories:", error);
        res.status(500).json({
            message: "Error retrieving categories",
            status: "error",
        });
    }
    return;
}

exports.updateCategory = async(req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let { name } = req.body;
    try {
        const category = await prisma.category.update({
            where: { id },  
            data: { name },
        });
        res.json({
            data: category,
            message: "Category Was Successfully Updated",
            status: "success",
        });
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({
            message: "Error updating category",
            status: "error",
        });
    }
    return;
}

exports.deleteCategory = async(req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    try {
        const category = await prisma.category.delete({
            where: { id },
        }); 
        res.json({
            data: category,
            message: "Category Was Successfully Deleted",
            status: "success",
        });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({
            message: "Error deleting category",
            status: "error",
        });
    }
    return;
};