window.localStorage.setItem("key1", "test1");
window.localStorage.setItem("key2", "test2");
window.localStorage.setItem("key3", "test3");
window.localStorage.setItem("key4", "test4");
window.localStorage.setItem("key5", "test5");

showStorageContent();

// удаление элемента по ключу
window.localStorage.removeItem("key1")

showStorageContent();

function showStorageContent() {
	document.write("Количество пар ключ-значение " + window.localStorage.length + "<br />")

	document.write("Все ключи в localStorage:<br />")

	for (var i = 0; i < window.localStorage.length; i++) {
		// key - получение элемента по индексу
		document.write(window.localStorage[localStorage.key(i)] + "<br />"); 
	}
	document.write("<br />")
}

document.getElementById("btn1").onclick = function () {
	// удаление всех записей в хранилище
	window.localStorage.clear();
	showStorageContent();
}