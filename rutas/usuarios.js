var ruta=require("express").Router();
var {Usuario}=require('../conexion');
ruta.get("/",(req,res)=>{
    Usuario.findAll({where:{status:1}}) //promesa que nos manda los datos de la base 
    .then((usu)=>{
       // console.log(usu);
       // res.end();
        res.render("mostrarUsuarios",{usuarios:usu});
    })
    .catch((err)=>{
        console.log("Error ",+err);
    });
});

ruta.get("/nuevoUsuario",(req,res)=>{
    res.render("nuevoUsuario");
});

//lo que nos llege del formulario lo llevamos a usuario
ruta.post("/capturarUsuario",(req,res)=>{
   // console.log(req.body);
    Usuario.create(req.body)
    .then(()=>{
         res.redirect("/"); //esta funcion tiene que terminar en un res
    })
    .catch((err)=>{
        console.log("No se pudo insertar el registro "+err);
        res.redirect("/");
    });
//thet y cacht
});

ruta.get("/editarUsuario/:id",(req,res)=>{ // req recuperar
    //consulta para mostrar usuario
    Usuario.findByPk(req.params.id) //params porque viene en la url
    .then((usu)=>{
        res.render("modificarUsuario",{usuario:usu});
    })
    .catch((err)=>{
        console.log("error "+err);
        res.redirect("/");
    });
    
});

ruta.post("/modificarUsuario",(req,res)=>{
Usuario.update(req.body,{where:{id:req.body.id}}) //body cuando recuperamos del formulario
.then(()=>{
    res.redirect("/");
})
.catch((err)=>{
    console.log("Error:  "+err);
    res.redirect("/");
});
});

ruta.get("/borrarUsuario2/:id",(req,res)=>{ //borrado logico cambia status a 0
    Usuario.update({status:0},{where:{id:req.params.id}}) //body cuando recuperamos del formulario
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log("Error:  "+err);
        res.redirect("/");
    });
    });

ruta.get("/borrarUsuario/:id",(req,res)=>{ 
    Usuario.destroy({where:{id:req.params.id}}) //borrado fisico y params url
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{console.log("Error...."+err)});
    res.redirect("/");
});

module.exports=ruta;