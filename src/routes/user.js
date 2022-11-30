const express = require('express');
const router = express.Router();
const userSchema = require("../models/user");


//creacion de un usuario
router.post('/user',(req,res)=>{
  const user=  userSchema(req.body);
  user
  .save()
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

// Listado de usuarios 
router.get('/users',(req,res)=>{
  userSchema
  .find()
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

//consulta un usuario:
router.get('/users/:id',(req,res)=>{
  const {id}= req.params;
  userSchema
  .findById(id)
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
});

// Actualizar un usuario por id
router.put('/users/:id',(req,res)=>{
  const {id}= req.params;
  const {usuario,contrasena,nombre,email}= req.body;
  userSchema
  .updateOne({_id:id},{ $set: {usuario,contrasena,nombre,email}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
} );

// Eliminar un usuario por id
router.delete('/users/:id',(req,res)=>{
  const {id}= req.params;
  userSchema
  .remove({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}))
} );

module.exports = router;