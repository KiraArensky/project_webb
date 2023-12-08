// Получаем кнопку для переключения темы
const toggleThemeButton = document.querySelector("#toggle-theme");

// Определяем функцию для переключения темы
function toggleTheme() {
  // Получаем текущую тему
  const currentTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";

  // Добавляем или удаляем класс в зависимости от текущей темы
  document.body.classList.toggle(currentTheme);
}

// Прикрепляем обработчик события к кнопке
toggleThemeButton.addEventListener("click", toggleTheme);