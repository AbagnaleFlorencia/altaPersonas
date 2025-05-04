import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Persona = sequelize.define("Persona", {
    id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    nom: {type:DataTypes.STRING, allowNull:false},
    apell: {type:DataTypes.STRING, allowNull:false},
    edad: {type:DataTypes.INTEGER}
})

export default Persona;