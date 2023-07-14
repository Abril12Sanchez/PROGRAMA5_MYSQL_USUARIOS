var Sequelize = require("sequelize");
var usuarioModelo=require ("./modelos/usuarios");
require("dotenv").config();

//definimos el de planet 
var db=process.env.DB_MYSQL;
var usuario=process.env.USUARIO_MYSQL ;
var password=process.env.PASSWORD_MYSQL;
var host=process.env.HOST_MYSQL;
var port=process.env.PORT_MYSQL;



var conexion=new Sequelize(db, usuario, password, {
    host: host, 
    port: port,
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            rejectUnauthorized: true,
        },
        define:{
            timestamps:false
        }
    }
});



// funcion es una promesa 
conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MYSQL de Planet");
})

.catch((err)=>{
    console.log("error al conectarse a MYSQL de Planet"+err);
    console.log("Intentar nuevamente");
    //si no jala, jalamos el local
//  db=process.env.DB_LOCAL;
//  usuario=process.env.USUARIO_MYSQL_LOCAL;
//  password=process.env.PASSWORD_MYSQL_LOCAL;
//  host=process.env.HOST_MYSQL_LOCAL;
//  port= process.env.PORT_LOCAL;

// conexion=new Sequelize(db, usuario, password, {
//     host: host, 
//     port: port,
//     dialect: 'mysql'
// });
// conexion.sync({force:false})
// .then(()=>{console.log("Conexion satisfactoria a MYSQL LOCAL");})
// .catch((err)=>{console.log("Error al conectarse a MYSQL LOCAL");});


});

var Usuario=usuarioModelo(conexion);
//module.exports= Usuario;
module.exports={
    Usuario:Usuario
}