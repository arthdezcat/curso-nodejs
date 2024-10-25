const { faker } = require('@faker-js/faker');

const boom = require('@hapi/boom');

class ProductsService{

  constructor(){
    this.products = [];
    this.generate();

  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id : faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        //image: faker.image.imageUrl()
        isBlock: faker.datatype.boolean(),
      });

    }
  }

async create(data){
  const newProduct = {
    id: faker.string.uuid(),
    ...data
  }
  this.products.push(newProduct);
  return newProduct;
}

async find(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(this.products);
    }, 3000);
  })
}

async findOne(id){
  const product = this.products.find(item => item.id === id);
  if(!product){
    throw boom.notFound('product not found');
  }
  if (product.isBlock){
    throw boom.conflict('product is block');
  }
  return product;
}

async update(id, changes){
  const index = this.products.findIndex(item => item.id === id);
  if(index === -1){
    throw boom.notFound('product not found');
  }
  const product = this.products[index];
  this.products[index] = {
    ...product,
    ...changes
  };
  return this.products[index];
}


async delete(id){
  const index = this.products.findIndex(item => item.id === id);
  if(index === -1){
    throw boom.notFound('product not found');
  }
  this.products.splice(index, 1);
  return { id };
}
async clearTx(img, rol){

  const correctO = img.replace(/ó/i,"o");
  //const correct2 = img.replace(/á/i, "a");
  //&&img.replace(/í/i, "i");
  if(correctO!=img){
    console.log(correctO);
    const correctA = correctO.replace(/á/i, "a");
    if(correctA!=correctO){
      const correctI = correctA.replace(/í/i, "i");
      if(correctI!=correctA){
        const correctU = correctI.replace(/ú/i, "u");
      }
      return(correctI);
    }
    return(correctA);
  }return(correctO);

  /*
 const rolO = rol.replace(/ó/i,"o");
  if(rolO!=rol){
    console.log(rolO);
    const rolA = rolO.replace(/á/i, "a");
    if(rolA!=rolO){
      const rolI = correctA.replace(/í/i, "i");
      if(rolI!=rolA){
        const rolU = correctI.replace(/ú/i, "u");
      }
      return(rolI);
    }
    return(rolA);
  }return(rolO);*/

}
}

module.exports = ProductsService;
