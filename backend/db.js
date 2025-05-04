import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./datos/personas.db"

}); // inicializamos la conexion a base de datos

export default sequelize; //para poder exportarlo, es el objeto con minuscula pq es el instanciado 
// y ahora lo llamo desde app.js