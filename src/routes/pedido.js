const express = require('express');
const router = express.Router();
const pedidoSchema = require("../models/pedido");

//creacion de un pedido
router.post('/pedido',(req,res)=>{
  const pedido=  pedidoSchema(req.body);
  pedido
  .save()
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

// Listado de todos los pedidos  
router.get('/pedidos',(req,res)=>{
  pedidoSchema
  .find()
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

//consulta un solo pedido:
router.get('/pedidos/:id',(req,res)=>{
  const {id}= req.params;
  pedidoSchema
  .findById(id)
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

// Actualizar un pedido por id
router.put('/pedidos/:id',(req,res)=>{
  const {id}= req.params;
  const {usuario,fecha_recogida,hora_recogida,ancho,alto,largo,peso,delicado,estado,nombre_origen,identificacion_origen,direccion_origen,telefono_origen,ciudad_origen,pais_origen,nombre_destino,identificacion_destino,telefono_destino,direccion_destino,ciudad_destino,pais_destino}= req.body;
  pedidoSchema
  .updateOne({_id:id},{ $set: {usuario,fecha_recogida,hora_recogida,ancho,alto,largo,peso,delicado,estado,nombre_origen,identificacion_origen,direccion_origen,telefono_origen,ciudad_origen,pais_origen,nombre_destino,identificacion_destino,telefono_destino,direccion_destino,ciudad_destino,pais_destino}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
} );

// Eliminar un usuario por id
router.delete('/pedidos/:id',(req,res)=>{
  const {id}= req.params;
  pedidoSchema
  .remove({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
} );

module.exports = router;