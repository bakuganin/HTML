var person = {};
person.firstName = "Jhon";
person.lastName = "Doe";
person.age = 30;

function save() {
	window.localStorage["data"] = JSON.stringify(person); // сериализация данных и сохранение их в локальном хранилище
}

function read() {
	var data = JSON.parse(window.localStorage["data"]); // десериализация обьекта из локального хранилища.
	alert("First Name: " + data.firstName +
		"\r\nLast Name: " + data.lastName +
		"\r\nAge: " + data.age);
}

function clearStorage() {
	window.localStorage.clear(); // удаление данных из локального хранилища
}