document.addEventListener("DOMContentLoaded", function() {
    const contactPanel = document.getElementById("contact-panel");
    const contactForm = document.getElementById("contact-form");
    
    // Muestra el panel de contacto al hacer clic en "Contact Us"
    document.querySelector("li a[href='#contact-panel']").addEventListener("click", function(e) {
        e.preventDefault();
        contactPanel.style.display = "block";
    });

    // Cierra el panel de contacto al hacer clic en "Submit"
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        contactPanel.style.display = "none";
        // Agregar aquí el código para procesar el formulario si es necesario
    });
});
