//querySelector
// const heading = document.querySelector('.header__texto h2') // retorna entre 0 o un elemento
// heading.textContent="Nuevo";
// heading.classList.add ('nueva-clase');


//selecciona el primer elemento que encuentre en el HTML


// querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// enlaces[0].textContent='Nuevo texto para Enlace';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');


//selecciona todos los elementos pero puede especificarse si quiere usar uno en
// especifico


//getlementbyid

// const heading2=document.getElementById('heading');
// console.log(heading2);


//forma antigua de seleccionar elementos del html

//generar nuevo enlace 
// const nuevoEnlace=document.createElement('A')
//agregar el href
// nuevoEnlace.href='nuevo-enlace.html';

//agregar el texto
// nuevoEnlace.textContent = 'Tienda';

//agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace');

//agregar al documento
// const navegacion=document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);


//agregar eventos 

// console.log(1);


// window.addEventListener('load', imprimir);

// window.onload=function(){
//     console.log(3);
    
// }

// document.addEventListener('DOMContentLoaded', function(){//solo espera el HTML, pero no espera el css o imágenes
//     console.log(4);
    
// })

// console.log(5);

// function imprimir(){
//     console.log(2);
    
// }

//seleccionar elementos y asociarles eventos

// const btnEnviar = document.querySelector('.boton--primario')

// btnEnviar.addEventListener('click', function (evento){
//     console.log(evento);     
//     evento.preventDefault();

// validar un formulario

//     console.log('enviando el formulario');
// });



//eventos de los inputs y text area

const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

const nombreinput = document.querySelector ('#nombre');
const emailinput = document.querySelector ('#email');
const mensajeinput = document.querySelector ('#mensaje');
const formulario = document.querySelector('.formulario');


nombreinput.addEventListener('input', leerTexto)
emailinput.addEventListener('input', leerTexto)
mensajeinput.addEventListener('input',leerTexto) 

// evento submit para enviar información
formulario.addEventListener('submit', function (evento){
    evento.preventDefault() //"preventDefault" previene la acción por defecto

    // validar el formulario

    const { nombre, email, mensaje } = datos;

    if (nombre=== ''|| email === ''|| mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        

        return;//Corta la ejecución del código
    }
    // crear la alerta de enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
    
});

// juntando funciones para tener un código mas compacto 
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent=mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
    alerta.remove();
    }, 3000);
}

// muestra una alerta cuando se envié correctamente
// function mostrarMensaje(mensaje) {
    // const alerta = document.createElement('P');
    // alerta.textContent = mensaje;
    // alerta.classList.add('correcto')
    // formulario.appendChild(alerta);


    //desaparecer la alerta
    // setTimeout(() => {
    //     alerta.remove();
    // }, 3000);



//toma la inf del formulario y los guarda
function leerTexto (e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value

    console.log(e.target);
    // console.log(datos);
};

// mostrar un error en pantalla

// function mostrarError (mensaje) {
    // const error = document.createElement('P');
    // error.textContent = mensaje;
    // error.classList.add('error');
    // formulario.appendChild(error); 
    
    // desaparecer el error

// setTimeout(() => {
//     error.remove();  (remove sirve para quitar un elemento)
// }, 3000);
// }

