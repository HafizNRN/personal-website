const projectContains = document.querySelectorAll(".project_container");
const projectDetails = document.querySelectorAll(".project_detail");

projectContains.forEach((project, index) => {
  project.addEventListener("click", () => {
    projectDetails[index].classList.remove("hidden");
    setTimeout(function () {
      projectDetails[index].classList.add("hidden");
    }, 3000);
  });

  project.addEventListener("mouseenter", () => {
    projectDetails[index].classList.remove("hidden");
  });
  project.addEventListener("mouseover", () => {
    projectDetails[index].classList.add("hidden");
  });
});