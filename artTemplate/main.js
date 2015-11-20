require([
	'./temp/build/template',
], function (template) {
	'use strict';
	var layerData = {
		one: "One",
		two: "Two",
		three: "Three"
	}
	document.getElementById('layer_one').innerHTML = template('layer-one', layerData);
	var doc = document;
	doc.getElementById("update_two").onclick = function () {
		layerData.two = layerData.three = Date.now();
		doc.getElementById("layer_two").innerHTML = template('layer-two', layerData);
	}
	doc.getElementById("update_three").onclick = function () {
		layerData.three = Date.now();
		doc.getElementById("layer_three").innerHTML = template('layer-three', layerData);
	}
});