const menu = document.querySelector("#menu-list");

document.querySelector("#btn-toggle").addEventListener("click", () => {
	menu.classList.toggle("navbar__menu--hide");
});

menu.addEventListener("click", () => {
	if (!menu.classList.contains("navbar__menu--hide")) {
		menu.classList.add("navbar__menu--hide");
	}
});
