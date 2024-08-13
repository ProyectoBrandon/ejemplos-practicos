let usuarioAutenticado = new Promise ( (resolve, reject) =>{
    let auth=true;

    if (auth){
        resolve('Acceso permitido'); // El promise se cumple 
    }else{
        reject('Acceso no permitido');//El promise no se cumple
    }
} );


usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

//en los promise existen 3 valores posibles
// pending: No se a cumplido pero tampoco se a rechazado
// fulfilled : ya se cumplió el promise
// reject: se ha rechazado o no se puede cumplir