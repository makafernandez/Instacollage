//ACA DECLARAREMOS NUESTRAS FUNCIONES PARA HACER POSIBLE LA TRANSFERNCIA DE DATOS
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);//ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR
  ev.dataTransfer.effectAllowed = "copy";
}

function permitirDrop(ev){
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copy";
}
function drop(ev) {
  ev.preventDefault();
  var id_thumb = ev.dataTransfer.getData('text');//ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_thumb));
}