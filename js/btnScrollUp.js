let boxUp = document.getElementById("up");

boxUp.addEventListener("click", function () {
	document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop > 400) {
		boxUp.style.display = "block";
	} else {
		boxUp.style.display = "none";
	}
});
