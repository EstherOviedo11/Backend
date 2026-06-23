const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
  ));



// rutas backend
const empresaRoutes = require('./rutas/empresa');
const empresaRoutes = require('./rutas/areas_trabajo');
const empresaRoutes = require('./rutas/clientes');
const empresaRoutes = require('./rutas/cxcobrar');
const empresaRoutes = require('./rutas/cxpagar');
const empresaRoutes = require('./rutas/detalle_compra');
const empresaRoutes = require('./rutas/detalle_venta');
const empresaRoutes = require('./rutas/empleados');
const empresaRoutes = require('./rutas/encabeza_compra');
const empresaRoutes = require('./rutas/enacabeza_venta');
const empresaRoutes = require('./rutas/formapago');
const empresaRoutes = require('./rutas/pagos');
const empresaRoutes = require('./rutas/producto');
const empresaRoutes = require('./rutas/proveedor');
const empresaRoutes = require('./rutas/sucursales');
const empresaRoutes = require('./rutas/tipoproducto');
const empresaRoutes = require('./rutas/tipousuario');
const empresaRoutes = require('./rutas/usuario');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'Kogami401509',
    port:3306,
    database:'ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');
 // create application/json parser
app.use(bodyParser.json());


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});
