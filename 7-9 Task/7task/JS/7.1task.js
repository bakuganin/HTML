if (window.addEventListener) window.addEventListener("load", loadHandler, false);
function loadHandler() {
	// Получение первого элемента на странице, который соответсвует одному из селекторов указанных параметрах.
	// В данном случае возвращаем элемент со значением test в атрибуте jQuery
	var e = document.querySelector(".test"); // $(".test") - элемент в jQuery

	// var e = document.querySelector(".helloWorld", ".test2"); // получение элемента с id helloWorld или элемента с классом test

	// var e = document.querySelector(".menu > li"); // первый li вложенный в элемент с классом menu

	e.style.fontSize = "51px";
	e.style.color = "gray";
}