//metodo

const reproductor={
    reproducir: function(id){
        console.log(`Reproduciendo canción:${id}.`)
    },
    pausar: function(){
        console.log('Stop.')
    },
    CrearPlayList: function(nombre){
        console.log(`Creando la playlist :${nombre}.`)
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la playlist :${nombre}.`)
    }
}


reproductor.borrarCanción = function (id){
    console.log(`Eliminado la canción :${id}.`)
}

reproductor.reproducir('canción');
reproductor.pausar();
reproductor.borrarCanción(20);
reproductor.CrearPlayList('Metal');
reproductor.reproducirPlayList('Metal');