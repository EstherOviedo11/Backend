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
const areastrabajoRoutes = require('./rutas/areastrabajo');
const clientesRoutes = require('./rutas/clientes');
const cxcobrarRoutes = require('./rutas/cxcobrar');
const cxpagarRoutes = require('./rutas/cxpagar');
const detallecompraRoutes = require('./rutas/detallecompra');
const detalleventaRoutes = require('./rutas/detalleventa');
const empleadosRoutes = require('./rutas/empleados');
const encabezadocompraRoutes = require('./rutas/encabezadocompra');
const encabezadoventaRoutes = require('./rutas/enacabezadoventa');
const formapagoRoutes = require('./rutas/formapago');
const pagosRoutes = require('./rutas/pagos');
const productosRoutes = require('./rutas/producto');
const proveedorRoutes = require('./rutas/proveedor');
const sucursalesRoutes = require('./rutas/sucursales');
const tipoproductoRoutes = require('./rutas/tipoproducto');
const tipousuarioRoutes = require('./rutas/tipousuario');
const usuarioRoutes = require('./rutas/usuario');

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
