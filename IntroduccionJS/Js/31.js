
const boton = document.querySelector('#boton');

boton.addEventListener('click',function (){
    Notification.requestPermission()
    .then(resultado => console.log ('EL resultado es:', resultado))
});

if (Notification.permission == 'granted'){
    new Notification ('esta es una notificación', {
        icon: 'img/foto.jgp',
        body: 'Código de Brandon, las mejores paginas'
    })
}