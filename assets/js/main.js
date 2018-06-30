function onDragEnd(event) {

    console.log('Me has llamado');

}

function onDragStart(event) {

    console.log(event);

    event.dataTransfer.setData('text', event.target.id)

    console.log('moviemdo =>' + event.target.id + '==' + event.dataTransfer.getData('text'));
}

function onDragOver(event) {

    event.preventDefault();

}

function onDrop(event) {

    //alert('onDrop')

    event.preventDefault();

    var data = event.dataTransfer.getData('text')

    event.target.appendChild(document.getElementById(data));

    console.log(data);