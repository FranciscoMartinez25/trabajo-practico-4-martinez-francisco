import { Movie } from "../models/movie.model.js";


// Obtener todas las películas
export const getAllMovie = async (req, res) => {
  try {
    const movies = await Movie.findAll();

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Obtener película por ID
export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Crear película
export const createMovie = async (req, res) => {
  try {
    const { name, description, price, stock, color } = req.body;

    if (!color) {
      return res.status(400).json({
        message: "El color no puede estar vacío",
      });
    }

    const movie = await Movie.create({
      name,
      description,
      price,
      stock,
      color,
    });

    res.status(201).json({
      message: "Película guardada correctamente",
      movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Actualizar película
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    await movie.update(req.body);

    res.status(200).json({
      message: "Película actualizada correctamente",
      movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Eliminar película
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    await movie.destroy();

    res.status(200).json({
      message: "Película eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};