const express = require('express');

const ProductsService = require('./../services/product.service');

const validatorHandler = require('./../middlewares/valitador.handler');

const bcryptjs = require('bcryptjs');

const User = require('./../models/usuarios');

const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');
const usuarios = require('./../models/usuarios');

const router = express.Router();
const service = new ProductsService();


router.get('/', async (req, res)=>{
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res)=>{
  res.send('Yo soy un filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next)=>{
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'), async (req, res)=>{
  const {name,email,password,img,rol,stats,google} = req.body;
  const user = new User({name,email,password,img,rol,stats,google});
//verificar correo

//encriptar contraseña
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  //const newProduct = await service.create(body);
  res.status(201).json(user);
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next)=>{
  try {
  const { id } = req.params; //recibir ID
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
  } catch (error) {
    next(error);
  }

});

/*router.put('/:id', (req, res)=>{
  const { id } = req.params; //recibir ID
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
    id,
  });
});*/

router.delete('/:id', async (req, res)=>{
  const { id } = req.params; //recibir ID
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
