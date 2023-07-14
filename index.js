var express=require("express");
var usuarioRuta=require("./rutas/usuarios")

var app=express();
//motor de vistas
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use("/", usuarioRuta);

//definir puerto
var port=process.env.PORT ||  3000; 
app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
    // console.log("Servidor en http://localhost"+port);
});