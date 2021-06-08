import express from 'express'
import morgan from 'morgan'
// llamamos  a la funcion que hace referencia a la clase alummnorouter

import alumnosRouters from './routes/alumno.routers';
import usersRouters  from './routes/user.routers';
import productoRouters from './routes/producto.routers'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

// servocop get

app.get('/' , function (req , res , next){
    res.send('Bienvenido a Node JS!..');
});


// una vez importando llamamos a la ruta
app.use('/api/auth/alumnos' , alumnosRouters);

app.use('/api/auth/users' , usersRouters);
app.use('/api/auth/productos' , productoRouters);
export default app;