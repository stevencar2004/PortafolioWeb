const showProjects = document.getElementById("showMoreProjects");
const boxProjects = document.getElementById("projects__more");

showProjects.addEventListener("click", () => {
	if (boxProjects.classList.contains("projects__more--hide")) {
		boxProjects.classList.remove("projects__more--hide");
		showProjects.children[0].innerHTML = "Show Less";
		showProjects.children[1].className = "fa-solid fa-chevron-up";
	} else {
		boxProjects.classList.add("projects__more--hide");
		showProjects.children[0].innerHTML = "Show More";
	}
});
