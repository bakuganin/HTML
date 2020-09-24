function init() {
	var e = document.getElementById("support");

	if (window.sessionStorage) {
		e.innerHTML = "Этот браузер поддерживает sessionStorage";
	} else {
		e.innerHTML = "Этот браузер не поддерживает sessionStorage";
	}

	e.innerHTML += "<br />";

	if (window.localStorage) {
		e.innerHTML += "Этот браузер поддерживает loacalStorage";
	} else {
		e.innerHTML += "Этот браузер не поддерживает loacalStorage";
	}
}
window.addEventListener("load", init, false);