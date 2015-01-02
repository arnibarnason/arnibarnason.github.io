$(function() {
	$( "#accordion" ).accordion();
});

$("#accordion").accordion({ 
	heightStyle: "content" 
});

$("#accordion").accordion({ header: "h2", collapsible: true, active: false });