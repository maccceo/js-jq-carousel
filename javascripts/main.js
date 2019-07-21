$(document).ready(function() {
	console.log("documento pronto");

	//funzioni al click dei tasti prima e dopo
	$(".prev").click(prevClick);
	$(".next").click(nextClick);
});


function prevClick () {
	var actualActive = $("img.active");
	var lastItem = $("img.last");
	var firstItem = $("img.first");

	// se torno indietro dalla prima devo attivare l'ultima
	if (actualActive.hasClass("first")) {
		firstItem.removeClass("active");
		lastItem.addClass("active");
	}
	// altrimenti attiva quella prima e disattivo quella attuale
	else {
		actualActive.prev().addClass("active");
		actualActive.last().removeClass("active");
	}
};

function nextClick () {
	var actualActive = $("img.active");
	var lastItem = $("img.last");
	var firstItem = $("img.first");

	// se clicco avanti dall'ultima devo tornare alla prima
	if (actualActive.hasClass("last")) {
		lastItem.removeClass("active");
		firstItem.addClass("active");
	}
	// altrimenti attiva quella dopo e disattivo quella attuale
	else {
		actualActive.next().addClass("active");
		actualActive.first().removeClass("active");
	}
};