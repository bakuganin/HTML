function init() {
	var output = document.getElementById("output");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");

	btn1.onclick = function () {
		window.localStorage.setItem("key1", "Test value");
		// или
		window.localStorage["key2"] = "Test value 2";
	}

	btn2.onclick = function () {
		output.innerHTML = window.localStorage.getItem("key1");
		output.innerHTML += "<br />";
		output.innerHTML += window.localStorage.key2;
	}
}
window.addEventListener("load", init, false);