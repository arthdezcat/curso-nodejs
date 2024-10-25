const { faker } = require('@faker-js/faker');

//const boom = require('@hapi/boom');

class clarTex{
  async clearTx(img){
    img.replace(/á/i, "a");
    return img;

  }

}


module.exports = clarTex;
