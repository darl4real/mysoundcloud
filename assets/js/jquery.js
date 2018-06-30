< script src = "http://code.jquery.com/jquery-1.10.2.min.js" > < /script> <
    script >
    var index = 0;
var player = $('audio')[0];
player.volume = 0.5;

/*
function readSong() {
  var files = $('#files').prop('files');
  var reader = new FileReader();
  reader.onload = function(e) {
    $('audio').attr('src', e.target.result);
  }
  reader.readAsDataURL(files[index++]); 
}
*/

function loadAndPlaySong(song) {
    // Song not loaded previously
    if (song.data('raw') === undefined) {
        var reader = new FileReader();
        reader.onload = function(e) {
            song.data('raw', e.target.result);
            $('audio').attr('src', e.target.result);
        }
        reader.readAsDataURL(song.data('song'));
    }
    // Song already loaded
    else $('audio').attr('src', song.data('raw'));
}

function loadSong(song) {
    // Song not loaded previously
    if (song.data('raw') === undefined) {
        var reader = new FileReader();
        reader.onload = function(e) {
            song.data('raw', e.target.result);
        }
        reader.readAsDataURL(song.data('song'));
    }
}

$('body').on('click', 'li', function() {
    loadAndPlaySong($(this));
});

$('#files').change(function() {
    displaySongList();
});

function displaySongList() {
    $('#fileWrapper').html('<ul></ul>');
    $.each($('#files').prop('files'), function() {
        $('#fileWrapper ul').append('<li>' + this.name + '</li>');
        $('#fileWrapper ul li:last-child').data('song', this);
        loadSong($('#fileWrapper ul li:last-child'));
    });
}

player.addEventListener('ended', function() {
    readSong();
});

player.addEventListener("timeupdate", function() {
    var duration = document.getElementById('duration');
    var s = parseInt(player.currentTime % 60);
    s = s < 10 ? '0' + s : s;
    var m = parseInt((player.currentTime / 60) % 60);
    $('#duration').html(m + ':' + s + ' / ' + player.duration);

}, false);

var volume = document.getElementById('volume');
volume.addEventListener('change', function() {
    player.volume = parseFloat(this.value / 10);
}, false);

/*
$('.volume-up').click(function() {
  if(player.volume < 1) player.volume += 0.1;
});
$('.volume-down').click(function() {
  if(player.volume > 0) player.volume -= 0.1;
});
*/

$('.pause').click(function() {
    player.pause();
    $('.pause').hide();
    $('.play').show();
});
$('.play').click(function() {
    player.play();
    $('.play').hide();
    $('.pause').show();
}); <
/script>