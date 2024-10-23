const mongoose = require('mongoose');

const dbName = "cursonodejs"
var username = encodeURIComponent("user_nodejs");
var password = encodeURIComponent("TB7k4383zBB61iCx");
const uri = `mongodb+srv://${username}:${password}@cluster0.ktpjm.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;


const dbConnection = async() =>{

  try {

    await mongoose.connect(uri);
    console.log('Base de datos online');

  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }

}

module.exports = { dbConnection }
