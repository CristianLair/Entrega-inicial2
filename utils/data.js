const request = require('postman-request');

const getRegistro = (callback) => {
    request('https://entrega-website.herokuapp.com/registros', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}


module.exports= {
 
  getRegistro

}