const toggleLightModeButton = document.querySelector('#toggle-btn');

// Kontrollera om knappen hittades
if (toggleLightModeButton) {
  toggleLightModeButton.addEventListener('click', toggleLightMode);
  console.log(toggleLightModeButton);
} else {
  console.warn('Knappen med id "toggle-btn" hittades inte.');
}

export function toggleLightMode() {
  document.body.classList.toggle('theme--dark');
  updateToggleButtonText();
}

function updateToggleButtonText() {
  const isDarkMode = document.body.classList.contains('theme--dark');

  if (toggleLightModeButton) {
    toggleLightModeButton.innerHTML = isDarkMode
      ? 'Välj mörkt läge'
      : 'Välj ljust läge';
  }
  console.log(isDarkMode ? 'Mörkt läge aktiverat.' : 'Ljust läge aktiverat.');
}
