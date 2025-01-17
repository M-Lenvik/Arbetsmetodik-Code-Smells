const toggleLightModeButton = document.querySelector('#toggle-btn');

// Kontrollera om knappen hittades
if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
    console.log(toggleLightModeButton);
} 
else {
    console.warn("Toggle button not found.");
}

export function toggleLightMode() {
    document.body.classList.toggle('theme--dark')
    if (document.body.classList.contains('theme--dark')) {
        if (toggleLightModeButton) {
        toggleLightModeButton.innerHTML = 'Välj mörkt läge';
        console.log('mörkt läge');
        }
    } 
    else {
        if (toggleLightModeButton) {
        toggleLightModeButton.innerHTML = 'Välj ljust läge';
        console.log('ljust läge');
        }
    }
}