import {Sequelize} from 'sequelize';

// ACA VA EL NOMBRE DE LA BASE DE DATOS
export const sequelize = new Sequelize("movie01", "root", "root",{
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export const startDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Conexion a la db esta lista");
  } catch (error) {
    console.error("No se pudo conectar a la db:", error);
  }
};