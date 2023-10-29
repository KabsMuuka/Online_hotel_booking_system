// Function to handle image selection
function Pick(imageId) {
    // Get the selected image's alt attribute
    const imgElement = document.getElementById(imageId);
    const selectedAlt = imgElement.alt;
   
    
    if (selectedAlt) {
        // Save the selected image alt (room number) to local storage
        localStorage.setItem('selectedImageAlt', selectedAlt);

        // Navigate to the selected image's HTML page
        window.location.href = `${selectedAlt}`;
    }

    // Disable all "pick" buttons to enforce one selection
    const buttons = document.querySelectorAll('.pick-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}
