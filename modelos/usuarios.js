var Sequelize = require("sequelize");

//exportar funcion
module.exports=(conexion)=>{
    //asi se llamara nuestra tabla
const UsuarioSchema=conexion.define("usuario", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },

    nombre:{
        type: Sequelize.STRING

    },
     usuario:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    status:{ //borrado logico_ el otro fisico no se hace
        type:Sequelize.BOOLEAN,
        default:true
    }
});
return UsuarioSchema;
}