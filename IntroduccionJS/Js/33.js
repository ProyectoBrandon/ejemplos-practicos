async function obtenerEmpleados() {

    const url = "empleados.json";

    // fetch(url)
    //     .then(resultado => resultado.json ())
    //     .then (datos => {
    //         // console.log(datos.Empleados)
        
    //         const {Empleados} = datos;
    //         console.log(Empleados);
    //     });

    const resultado = await fetch(url);
    const datos = await resultado.json();
    console.log(datos);
    
}

obtenerEmpleados();
