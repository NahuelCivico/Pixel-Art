var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
var _isPressed;

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
    var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
    setearColorPincel(colorActual);
});

// Funciones
showPaletaColores();
showGrilla();

function showPaletaColores(){
  $.each(nombreColores, function (i, v) {
    var $div = $('<div>', {"class": 'color-paleta'}).css("background-color" , v);
    $paleta.append($div);
  });
}

function showGrilla(){
  for (var i = 0; i < 1749; i++) {
    var $div = $('<div>', {"class": 'color-grilla'});
    $grillaPixeles.append($div);
  }
}

function setearColorPincel(color){
    $("#indicador-de-color").css("background-color", color);
}

function pintar($seleccion){
  var $color = $("#indicador-de-color").css("background-color");
  $seleccion.css('background-color', $color);
}

//Eventos
$(".color-grilla").mouseup(function(){
    _isPressed = false;
});

$(".color-grilla").mousedown(function(){
    _isPressed = true;
});

$(".color-paleta").click(function(){
    var $color = $(this).css("background-color");
    setearColorPincel($color);
});

$(".color-grilla").click(function(){
    var $seleccion = $(this);
    pintar($seleccion);
});

$(".color-grilla").mousemove(function(){
    if (_isPressed) {
      var $seleccion = $(this);
      pintar($seleccion);
    }
});

$('#borrar').click(function(){
    var $divsPixeles = $('#grilla-pixeles div');
    $.each($divsPixeles,function(i,v){
      $(this).animate({'background-color': 'White'} , 1500);
    });
});

$('.imgs li img').click(function(){
    var id = $(this).attr('id');
    switch (id) {
      case "batman":
        cargarSuperheroe(batman);
        break;
      case "wonder":
        cargarSuperheroe(wonder);
        break;
      case "flash":
        cargarSuperheroe(flash);
        break;
      case "invisible":
        cargarSuperheroe(invisible);
        break;
      default:
        break;
    }
});

$('#guardar').click(guardarPixelArt);
