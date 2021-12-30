/*Header*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var enviarCorreo = "El correo fue enviado correctamente"

$(document).ready(function(){
    $("#enviarCorreo").click(function(){
      alert(enviarCorreo);

    });
    });

/*Receta*/

$("#INGREDIENTES").dblclick(function(){
  $(this).css({
      "color": "red",
  })
  });   

  $("#PREPARACIÓN").dblclick(function(){
    $(this).css({
        "color": "red",
    })
    });   

/*RECETAS RELACIONADAS*/

$(".card-title").click(function(){
$(".card-text").toggle();
});
  