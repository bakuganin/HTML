// Событие storage происходит при внесении изменений в localStorage (при добавлении, удалении или изменении значений).
// Для того чтобы увидить работу этого примера, откройте в браузере две вкладки
// В первой вносите изменения в localStorage, а на вкладке отслеживайте изменения.
window.addEventListener("storage", displayEvent, true);
window.addEventListener("load", init, false);

function init() {
	var key = document.getElementById("keyInput");
	var val = document.getElementById('valueInput');

	document.getElementById("btnSave").onclick = function () {
		window.localStorage.setItem(key.value, val.value);
	}

	document.getElementById("btnRemove").onclick = function () {
		window.localStorage.removeItem(key.value);
	}

	document.getElementById("btnGet").onclick = function () {
		alert(window.localStorage.getItem(key.value));
	}
}
function displayEvent(e) {
	var d = document.getElementById("output");
	var message = "key: " + e.key + "<br />"; 			    	// измененный ключ
	message += "newValue: " + e.newValue + "<br />";		    // новое значение ключа
	message += "oldValue: " + e.oldValue + "<br />"; 			// старое значение ключа
	message += "url: " + e.url + "<br />";					    // адрес страницы на которой произошли изменения
	message += "storageArea: " + e.storageArea + "<br />"; 		// ссылка на обьект хранилища
	d.innerHTML = message;
}