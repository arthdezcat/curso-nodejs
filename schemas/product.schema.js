const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const email = Joi.string().min(10).max(50);
const password = Joi.string().min(8).max(50);
const img = Joi.string().min(5);
const rol = Joi.string().min(9);
const stats = Joi.boolean();
const google = Joi.boolean();


const  createProductSchema = Joi.object({

  name: name.required(),
  email: email.required(),
  password: password.required(),
  img: img.required(),
  rol:rol.required(),
  stats: stats.required(),
  google: google.required()
  //image: image.require()
});


const  updateProductSchema = Joi.object({
  name: name,
  email: email,
  password: password,
  img: img,
  rol:rol,
  stats: stats,
  google: google
  //image: image
});

const  getProductSchema = Joi.object({
  id: id.required(),

});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
