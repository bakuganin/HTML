window.addEventListener("load", function() {
	if (typeof Worker !== "undefined") {
		document.getElementById("support").innerHTML = "Браузер поддерживает HTML 5 Web Workers";
	}
	else {
		document.getElementById("support").innerHTML = "Браузер не поддерживает HTML 5 Web Workers"
	}
}, false);