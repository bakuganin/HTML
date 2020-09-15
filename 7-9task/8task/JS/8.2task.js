function init() {
	var output = document.getElementById("output");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");

	btn1.onclick = function () {
		window.sessionStorage.setItem("key1", "Test value");
		// или
		window.sessionStorage.key2 = "Test value 2";
		// или
		window.sessionStorage["key3"] = "Test value 3";
	}

	btn2.onclick = function () {
		output.innerHTML = window.sessionStorage.getItem("key1");
		output.innerHTML += "<br />";
		output.innerHTML += window.sessionStorage.key2;
		output.innerHTML += "<br />";
		output.innerHTML += window.sessionStorage["key3"];
	}
}
window.addEventListener("load", init, false);