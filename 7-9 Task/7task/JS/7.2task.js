if (window.addEventListener) window.addEventListener("load", loadHandler, false);
function loadHandler() {
	
	// Возвращает массив элементов, которые соответствуют селектору
	// В данном случае возвращается массив параграфов находящихся в элементе с атрибутом class="testClass"
	var pArray = document.querySelectorAll(".testClass p");
	for (var i = 0; i < pArray.length; i++) {
		pArray[i].style.border = "solid 1px pink";
		pArray[i].style.margin = "5px";
		pArray[i].style.padding = "5px";
	}
}