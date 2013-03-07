$(function (){
  for(var i = 52; i<56; i++){
    createCard("t" + i.toString(), i);
  }

  function callback() {
    setTimeout(function() {
      $( "#t55" ).hide().fadeIn();
    }, 1000 );
  };

  $( "#button" ).click(function() {
    $( "#t55" ).effect( 'blind', null, 500, callback );
    return false;
  });
});

function createCard(id, value) {
  var CARD_H = 210;
  var CARD_W = 150;
  var CARD_SCALE = 0.75;

  var card$ = $('#' + id);
  card$.draggable();
  card$.height( CARD_H * CARD_SCALE );
  card$.width( CARD_W * CARD_SCALE );

  var stage = new Kinetic.Stage({
    width: CARD_W * CARD_SCALE + 3,
    height: CARD_H * CARD_SCALE + 3,
    scale: CARD_SCALE,
    container: id,
    id: 'can_' + id
  });
  stage.add(drawCard(value, CARD_W, CARD_H));
}

function drawRect(w, h) {
  var rr = new Kinetic.Rect({
    width: w,
    height: h,
    stroke: 'black',
    strokeWidth: 3,
    fill: 'white',
    cornerRadius: 15
  });
  return rr;
}

function drawCard(number, w, h) {
  var card = new Kinetic.Layer({
    x: 0,
    y: 0,
    scale: 1
  });
  card.add(drawRect(w, h));
  if( 0 == (number % 5) && 0 == ( number % 11) ) {
    card.add(drawBackground('purple'));

    card.add(drawLogo('red', 75, 100, 1.5, 0));

    card.add(drawLogo('red',  45, 10, 0.15, 0));
    card.add(drawLogo('red',  55, 25, 0.15, 0));
    card.add(drawLogo('red',  65, 10, 0.15, 0));
    card.add(drawLogo('red',  75, 25, 0.15, 0));
    card.add(drawLogo('red',  85, 10, 0.15, 0));
    card.add(drawLogo('red',  95, 25, 0.15, 0));
    card.add(drawLogo('red', 105, 10, 0.15, 0));

    card.add(drawLogo('red',  45, 210 - 10, 0.15, 180));
    card.add(drawLogo('red',  55, 210 - 25, 0.15, 180));
    card.add(drawLogo('red',  65, 210 - 10, 0.15, 180));
    card.add(drawLogo('red',  75, 210 - 25, 0.15, 180));
    card.add(drawLogo('red',  85, 210 - 10, 0.15, 180));
    card.add(drawLogo('red',  95, 210 - 25, 0.15, 180));
    card.add(drawLogo('red', 105, 210 - 10, 0.15, 180));
  } else {
    card.add(drawLogo('purple', 75, 100, 1.5, 0));    
  }
  card.add(drawText(number, 75, 105, 1.6, 0, '#EEEE00', '#222222'));

  card.add(drawText(number,  17,  20, 0.5, 0, '#EEEE00', '#222222'));
  card.add(drawText(number,  17, 190, 0.5, 180, '#EEEE00', '#222222'));
  card.add(drawText(number, 133,  20, 0.5, 0, '#EEEE00', '#222222'));
  card.add(drawText(number, 133, 190, 0.5, 180, '#EEEE00', '#222222'));

  return card;
}

function drawLogo(color, x, y, scale, deg) {
  var TAKE6SVGDATA = 'm 35.9487,978.1695 c 0.52367,-4.0812 -0.32729,-5.5952 0.19639,-9.6763 -4.5821,-2.1064 -8.3787,-4.8052 -12.961,-6.9116 -0.98188,4.147 0.98187,9.0839 0,13.231 2.8802,2.5013 3.993,3.423 6.8732,5.9242 -6.4804,1.6456 -9.8188,3.4888 -16.299,5.1344 -0.45234,-10.207 4.5821,-20.8 7.0695,-33.373 -9.2781,13.991 -21.739,39.892 -20.619,41.865 0.66614,1.1741 18.787,2.4355 33.188,2.5673 -4.6476,5.1345 -9.2951,10.269 -13.943,15.403 5.0403,6.4512 10.081,12.902 15.121,19.352 -5.6294,2.1065 -11.259,4.2123 -16.888,6.3188 2.8802,3.0275 5.7604,6.0557 8.6405,9.0831 2.6183,-0.5264 5.2367,-1.0523 7.855,-1.579 0.13092,2.0404 0.26184,4.0812 0.39275,6.1215 3.2075,0.1973 6.2185,0.3951 9.424485,0.6085 3.205985,-0.1811 6.216985,-0.3789 9.424485,-0.5762 0.13091,-2.0403 0.26184,-4.0811 0.39275,-6.1215 2.6183,0.5267 5.2366,1.0526 7.855,1.579 2.8801,-3.0274 5.7603,-6.0556 8.6405,-9.0831 -5.629,-2.1065 -11.2586,-4.2123 -16.888,-6.3188 5.04,-6.45 10.0807,-12.9008 15.121,-19.352 -4.6479,-5.134 -9.2954,-10.2685 -13.943,-15.403 14.401,-0.1318 32.52187,-1.3932 33.188,-2.5673 1.12,-1.973 -11.3409,-27.874 -20.619,-41.865 2.4874,12.573 7.52184,23.166 7.0695,33.373 -6.4802,-1.6456 -9.8186,-3.4888 -16.299,-5.1344 2.8802,-2.5012 3.993,-3.4229 6.8732,-5.9242 -0.98188,-4.1471 0.98188,-9.084 0,-13.231 -4.5823,2.1064 -8.3789,4.8052 -12.961,6.9116 0.52367,4.0811 -0.32729,5.5951 0.19638,9.6763 -4.2548,-2.633 -3.7965,-1.3165 -8.05082,-3.96565 -4.25432,2.61685 -3.79602,1.30035 -8.05082,3.93335 z';
  var TAKE6SVGWIDTH = 88;
  var TAKE6SVGHEIGHT = 100;

  var take6 = new Kinetic.Path({
    data: TAKE6SVGDATA,
    x: x,
    y: y,
    width: TAKE6SVGWIDTH,
    height: TAKE6SVGHEIGHT,
    offset: {
      x: TAKE6SVGWIDTH / 2,
      y: 952.36218 + TAKE6SVGHEIGHT / 2,
    },
    scale: scale,
    fill: color
  });
  take6.setRotationDeg(deg);
  return take6;
}

function drawBackground(color) {
  var polyBackground = new Kinetic.Polygon({
    points: [15, 15, 135, 20, 135, 195, 20, 190],
    fill: color,
    strokeWidth: 0
  });
  return polyBackground;
}

function drawText(number, x, y, scale, deg, fill, stroke) {
  var text = new Kinetic.Text({
    x: x,
    y: y,
    width: 60,
    height: 60,
    scale: scale,
    fontSize: 59,
    fontStyle: 'bold',
    fill: fill,
    stroke: stroke,
    strokeWidth: 2,
    align: 'center',
    offset: {
      x: 30,
      y: 30
    },
    text: number.toString()
  });
  text.setRotationDeg(deg);
  return text;
}
