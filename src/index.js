require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT||9000;
const mongoose = require('mongoose');
const usersRoutes = require('./routes/user')
const pedidosRoutes = require('./routes/pedido')
app.use(express.json());
app.use('/api',usersRoutes);
app.use('/api',pedidosRoutes);

app.get('/',
(req,res) => {
 res.send("Hola mi API BE");
 });

// conexion a DB
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a la base de datos atlas'))
.catch((error)=>console.error(error));

app.listen(port, ()=> console.log('server listening on port: ', port));

