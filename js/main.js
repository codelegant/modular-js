require.config({
	baseUrl: "./js/",
	paths: {
		jquery: "jquery-1.10.2",
		ui: "ui/jquery.ui.core",
		datepicker: "ui/jquery.ui.datepicker",
		tool:"tool",
		name:"anymous"
	},
	shim: {
		ui: { exports: "$.ui" },
	}
});
define(["jquery", "ui", "datepicker","tool","name"], function (jQuery, ui, datepicker,tool,name) {
	var $ = jQuery;
	$(document).on("click", "#try", function () {
		//alert("Hi,I'm Button");
		console.info(tool.rgbToHsl(23,23,23));
		name.fullname();
		setTimeout(function(){
			$(this).css("color","red");
		}.bind(this),1000)
	});
	$("#datepicker").datepicker();
	console.info(Date.now());
});