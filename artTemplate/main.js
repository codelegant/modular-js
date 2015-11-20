require([
	'./temp/build/template',
], function(template) {
	'use strict';
	var layerData={
		one:"One",
		two:"Two",
		three:"Three"
	}
	document.getElementById('layer').innerHTML = template('layer-one', layerData);
});