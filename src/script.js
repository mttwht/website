(function() {
	Array.from(document.getElementsByTagName("nav")[0].children).forEach(e => {
		e.addEventListener("click", showSectionFromLinkElement);
	});

})();

	document.getElementsByTagName("nav")[0].firstElementChild.click();

function showSectionFromLinkElement(event) {
	var name = event.target.textContent.toLowerCase().replace(" ", "-");
	Array.from(document.getElementsByClassName('content')[0].children).forEach(e => {
		e.classList.add("hide");
	});
	document.getElementById(name).classList.remove("hide");
}
