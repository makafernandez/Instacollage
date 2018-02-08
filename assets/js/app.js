// Drag and Drop
function drag(ev) {
  console.log(ev.target.src);
  // Tipo de dato a transferir
  ev.dataTransfer.setData('text', ev.target.id);
  ev.dataTransfer.effectAllowed = "copy";
}

function dragstart_handler(ev) {
  // Set the drag effect to copy
  ev.dataTransfer.dropEffect = "copy";
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  // Recupera los datos del objeto:
  var id_thumb = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_thumb));
}