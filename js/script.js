const toggleThemeButton = document.querySelector("#toggle-theme");

function toggleTheme() {
  const currentTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";

  document.body.classList.toggle(currentTheme);
}

/////

toggleThemeButton.addEventListener("click", toggleTheme);

const form1 = document.querySelector("#regist_form");
const form2 = document.querySelector(".done");

form2.style.display = "none";

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  form1.style.display = "none";
  form2.style.display = "block";
});
