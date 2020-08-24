$(document).ready(function(){
  $('ul #home li a:first').addClass('active');
  $('#inicio').hide();
  $('ul #home li a:first').show(function(){
    $('#inicio').load('/Vistas/principal.html');
  });
});
