define([
	'./build/template',
], function(template) {
	'use strict';
	var data={
		list:["one","tow","three","four","five"]
	}
	document.getElementById('list').innerHTML = template('list', data);
});