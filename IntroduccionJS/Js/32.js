//Async / await

function descargarNuevosClientes() {
    return new Promise(resolve=>{
        console.log('Descargando clientes... Espere...');
        setTimeout(()=>{
            resolve('Los Clientes fueron Descargados');
        }, 5000);
    });
}

function descargarÚltimosPedidos() {
    return new Promise(resolve=>{
        console.log('Descargando pedidos... Espere...');
        setTimeout(()=>{
            resolve('Los pedidos fueron Descargados');
        }, 3000);
    });
}

async function app() {
    try{
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarÚltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarÚltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
        
    }catch (error){
        console.log(error);
    }
}
app();
console.log('Este código no se bloquea');


