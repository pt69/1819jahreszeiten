var haus_x = 50;
var haus_y = 200;
var bg_farbe = 'Skyblue';
var text_jz = 'Sommer';
var text_farbe_jz = 'Yellow';
var boden_farbe_jz = 'LimeGreen';
var t = 0;
var Sonne_Mond = 'Yellow'
var x = 0;
var rain_y = 30;
var rai_y = 20;
var ra_y = 10;
var r_y = 0;
var a_y = 30;
var b_y = 20;
var c_y = 10;
var d_y = 0;
var a = 0;
var b = 20;
var c = 40;
var d = 60;
var e = 80;
var f = 100;
var g = 120;
var h = 140;
var i = 160;
var j = 180;
var k = 200;
var l = 220;
var m = 240;
var n = 260;
var o = 280;
var fenster = 'Gold'
var regen_farbe = 'DeepSkyBlue'

function_sommer = 'AN';
function_herbst = 'AUS';
function_winter = 'AUS';
function_frühling = 'AUS';
function_winter_anfang = 'AUS';
function_ostern = 'AUS';
function_weihnachten = 'AUS';
function_rain = 'AUS';

function setup() {
	createCanvas(400, 400);
	background(bg_farbe);
	stroke(0);
	strokeWeight(0);
	frameRate(60);
}

function draw() {
	background(bg_farbe);

	fill('LightGray');
	rect(haus_x, haus_y, 150, 100);

	fill(fenster);
	rect(haus_x + 20, haus_y + 35, 30, 30);

	fill('SaddleBrown');
	rect(haus_x + 75, haus_y + 25, 40, 75);

	fill(90, 20, 0);
	ellipse(haus_x + 105, haus_y + 62.5, 8, 8);

	fill('FireBrick');
	triangle(haus_x, haus_y, haus_x + 75, haus_y - 70, haus_x + 150, haus_y);

	fill('Sienna');
	rect(haus_x + 235, haus_y, 32, 100);

	fill(0, 70, 30);
	triangle(haus_x + 200, haus_y + 35, haus_x + 250, haus_y - 90, haus_x + 305, haus_y + 35);

	fill(0, 70, 30);
	triangle(haus_x + 210, haus_y - 25, haus_x + 252, haus_y - 110, haus_x + 295, haus_y - 25);

	fill(Sonne_Mond);
	ellipse(385, 15, 75, 75);

	t = t + 1;

	if (t < 120) {
		Sonne_Mond = 'Yellow';
		bg_farbe = 'SkyBlue';
		fenster = 'Gold';
	}
	if (t > 120 && t < 240) {
		Sonne_Mond = 'LightGray';
		bg_farbe = 'Black';
		fenster = 'DimGray';
	}
	if (t > 240) {
		Sonne_Mond = 'Yellow';
		bg_farbe = 'SkyBlue';
		fenster = 'Gold';
		t = 0;
	}

	if (rain_y >= 300) rain_y = 30
	if (rai_y >= 300) rai_y = 20
	if (ra_y >= 300) ra_y = 10
	if (r_y >= 300) r = 0
	if (a >= 300) a = 0
	if (b >= 300) b = 0
	if (c >= 300) c = 0
	if (d >= 300) d = 0
	if (e >= 300) e = 0
	if (f >= 300) f = 0
	if (g >= 300) g = 0
	if (h >= 300) h = 0
	if (i >= 300) i = 0
	if (j >= 300) j = 0
	if (k >= 300) k = 0
	if (l >= 300) l = 0
	if (m >= 300) m = 0
	if (n >= 300) n = 0
	if (o >= 300) o = 0

	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), a, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), b, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), c, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), d, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), e, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), f, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), g, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), h, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), i, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), j, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), k, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), l, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), m, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), n, 5, 8)
	}
	if (function_rain == 'AN') {
		fill(regen_farbe)
		ellipse(random(400), o, 5, 8)
	}
	if (function_rain == 'AN') {
		a = a + 1;
		b = b + 1;
		c = c + 1;
		d = d + 1;
		e = e + 1;
		f = f + 1;
		g = g + 1;
		h = h + 1;
		i = i + 1;
		j = j + 1;
		k = k + 1;
		l = l + 1;
		m = m + 1;
		n = n + 1;
		o = o + 1
	}

	if (function_sommer == 'AN') {
		text_jz = 'Sommer'
	}
	if (function_sommer == 'AN') {
		text_farbe_jz = 'Yellow'
	}
	if (function_sommer == 'AN') {
		boden_farbe_jz = 'LimeGreen'
	}

	if (function_herbst == 'AN') {
		text_jz = 'Herbst'
	}
	if (function_herbst == 'AN') {
		text_farbe_jz = 'Maroon'
	}
	if (function_herbst == 'AN') {
		boden_farbe_jz = 'Green'
	}
	if (function_herbst == 'AN') {
		regen_farbe = 'DeepSkyBlue'
	}
	if (function_herbst == 'AN') {
		fill('DeepSkyBlue')
		ellipse(random(400), rain_y, 5, 8)
	}
	if (function_herbst == 'AN') {
		fill('DeepSkyBlue')
		ellipse(random(400), rai_y, 5, 8)
	}
	if (function_herbst == 'AN') {
		fill('DeepSkyBlue')
		ellipse(random(400), ra_y, 5, 8)
	}
	if (function_herbst == 'AN') {
		fill('DeepSkyBlue')
		ellipse(random(400), r_y, 5, 8)
	}
	if (function_herbst == 'AN') {
		rain_y = rain_y + 1
	}
	if (function_herbst == 'AN') {
		rai_y = rai_y + 1
	}
	if (function_herbst == 'AN') {
		ra_y = ra_y + 1
	}
	if (function_herbst == 'AN') {
		r_y = r_y + 1
	}

	if (function_winter_anfang == 'AN') {
		text_jz = 'Winter';
		text_farbe_jz = 'Snow';
		boden_farbe_jz = 'Green';
		regen_farbe = 'Snow'
	}

	if (function_winter == 'AN') {
		text_jz = 'Winter'
	}
	if (function_winter == 'AN') {
		text_farbe_jz = 'Snow'
	}
	if (function_winter == 'AN') {
		boden_farbe_jz = 'Snow'
	}
	if (function_winter == 'AN') {
		regen_farbe = 'Snow'
	}
	if (function_winter == 'AN') {
		fill('Snow')
		ellipse(random(400), rain_y, 5, 8)
	}
	if (function_winter == 'AN') {
		fill('Snow')
		ellipse(random(400), rai_y, 5, 8)
	}
	if (function_winter == 'AN') {
		fill('Snow')
		ellipse(random(400), ra_y, 5, 8)
	}
	if (function_winter == 'AN') {
		fill('Snow')
		ellipse(random(400), r_y, 5, 8)
	}
	if (function_winter == 'AN') {
		rain_y = rain_y + 1
	}
	if (function_winter == 'AN') {
		rai_y = rai_y + 1
	}
	if (function_winter == 'AN') {
		ra_y = ra_y + 1
	}
	if (function_winter == 'AN') {
		r_y = r_y + 1
	}
	if (function_winter == 'AN') {
		fill('Snow')
		triangle(haus_x + 40, haus_y - 38, haus_x + 75, haus_y - 70, haus_x + 110, haus_y - 38)
	}
	if (function_winter == 'AN') {
		fill('Snow')
		triangle(haus_x + 231, haus_y - 67.25, haus_x + 252, haus_y - 110, haus_x + 273.5, haus_y - 67.25)
	}

	if (function_weihnachten == 'AN') {
		fill('Red')
		ellipse(haus_x + 250, haus_y - 25, 10, 10)
	}
	if (function_weihnachten == 'AN') {
		fill('Blue')
		ellipse(haus_x + 225, haus_y, 10, 10)
	}
	if (function_weihnachten == 'AN') {
		fill('Khaki')
		ellipse(haus_x + 265, haus_y + 20, 10, 10)
	}
	if (function_weihnachten == 'AN') {
		fill('Indigo')
		ellipse(haus_x + 270, haus_y - 50, 10, 10)
	}

	if (function_ostern == 'AN') {
		fill('HotPink');
		ellipse(haus_x - 20, haus_y + 97, 10, 15);
		fill('Red');
		ellipse(haus_x + 50, haus_y + 95, 10, 15);
		fill('DarkMagenta');
		ellipse(haus_x + 135, haus_y + 95, 10, 15);
		fill('LemonChiffon');
		ellipse(haus_x + 150, haus_y + 97, 10, 15);
		fill('DarkOrange');
		ellipse(haus_x + 267, haus_y + 97, 10, 15)
	}

	if (function_frühling == 'AN') {
		text_jz = 'Frühling'
	}
	if (function_frühling == 'AN') {
		text_farbe_jz = 'Plum'
	}
	if (function_frühling == 'AN') {
		boden_farbe_jz = 'YellowGreen'
	}
	if (function_frühling == 'AN') {
		regen_farbe = 'DeepSkyBlue'
	}

	x = x + 0.5;

	if (x < 240) {
		function_sommer = 'AN';
	}
	if (x >= 240 && x < 480) {
		function_sommer = 'AUS';
		function_herbst = 'AN';
	}
	if (x >= 480 && x < 570) {
		function_herbst = 'AUS';
		function_winter_anfang = 'AN';
	}
	if (x >= 570 && x < 720) {
		function_winter_anfang = 'AUS';
		function_winter = 'AN';
	}
	if (x >= 620 && x < 700) {
		function_weihnachten = 'AN'
	} else {
		function_weihnachten = 'AUS'
	}
	if (x >= 480 && x < 540) {
		function_rain = 'AUS';
	}
	if (x >= 540 && x < 800) {
		function_rain = 'AN';
	}
	if (x >= 720 && x < 960) {
		function_winter = 'AUS';
		function_frühling = 'AN';
	}
	if (x >= 840 && x < 890) {
		function_ostern = 'AN'
	} else {
		function_ostern = 'AUS'
	}
	if (x >= 960) {
		function_frühling = 'AUS';
		function_sommer = 'AN';
		x = 0;
	}
	if (x >= 295 && x < 480) {
		function_rain = 'AN';
	}
	if (x >= 800) {
		function_rain = 'AUS';
	}

	fill(boden_farbe_jz);
	rect(0, 300, 400, 15);

	fill(123, 66, 29);
	rect(0, 315, 400, 85);

	fill(text_farbe_jz);
	textSize(30);
	textAlign(CENTER);
	text(text_jz, 200, 350);
}