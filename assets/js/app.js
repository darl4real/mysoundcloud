//alert("Cargado");

SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
})


function busqueda() {
    var grupo = $('input').val();
    alert("Pulsado" + grupo);
    SC.get('/tracks', {
        q: grupo
    }).then(function(tracks) {
        console.log('Listado de canciones->' + JSON.stringify(tracks, null, 2));
        alert("Número de canciones ->" + tracks.length);
        for (var i = 0; i < tracks.length; i++) {
            $('.lista').append("<div class='imagen_mini col-2'><img src='" +
                tracks[i].artwork_url + "' id = '" + tracks[i].id +
                "' draggable='true' ondragstart=''></div>");

            function onDrop(event) {

                //alert('onDrop')

                event.preventDefault();

                var data = event.dataTransfer.getData('text')

                event.target.appendChild(document.getElementById(data));

                console.log(data);
            }
        }
    })

}



var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    console.log('oEmbed response: ', oEmbed);

});





//SC.get('/tracks/random')
//.then(function(track) {
// console.log('Descripción canción ->' + JSON.stringify(track, null, 2));
//})

// SC.stream('/tracks/39654171').then(function(player){
//   player.play();
// }).catch(function(error){
//   alert('Error: ->'+error);
// })