const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

exports.createMovie = async (req, res) => {
  let { title , year } = req.body;

  try {
    const movies = await prisma.movies.create({
      data: {
        title,
        year,
      },
    });
  } catch (error) {
    console.error("Error creating movie:", error);
  }
  res.json({
    data: movie,
    message: "Movie Was Succesfully Created",
    status: "success",
  });
};

exports.readById = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  try {
    const movie = await prisma.movies.findUnique({
      where: { id },
    });
    res.json({
      data: movie,
      message: "Movie Was Succesfully Retrieved",
      status: "success",
    });
  }
  catch (error) {
    console.error("Error retrieving movie:", error);
    res.status(500).json({
      message: "Error retrieving movie",
      status: "error",
    });
  } 
};

exports.updateMovie = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let { title, year } = req.body;
  try {
    const movie = await prisma.movies.update({
      where: { id },
      data: { title, year },
    });
    res.json({
      data: movie,
      message: "Movie Was Succesfully Updated",
      status: "success",
    });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({
      message: "Error updating movie",
      status: "error",
    });
  }
};

exports.deleteMovie = async (req, res) => {   
  let { id } = req.params;
  id = parseInt(id);
  try {
    const movie = await prisma.movies.delete({
      where: { id },
    });
    res.json({
      data: movie,
      message: "Movie Was Succesfully Deleted",
      status: "success",
    });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({
      message: "Error deleting movie",
      status: "error",
    });
  }
};