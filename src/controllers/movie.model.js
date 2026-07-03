import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Product = sequelize.define(
  "movie01",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sinopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamp:false,
  },
);

export default movie01;