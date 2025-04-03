// Fonction pour ouvrir et afficher le modal
function openModal(imageSrc, title, description) {
    const modal = document.getElementById('detail-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (modal && modalImage && modalTitle && modalDescription) {
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "flex";
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.style.display = "none";
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    }
}

// Initialisation après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Fermeture via le bouton ×
    const closeButton = document.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Fermeture en cliquant à l'extérieur
    const modal = document.getElementById('detail-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Configuration des données pour chaque bouton
    const modalButtons = [
        { 
            selector: '.Command-1', 
            img: 'tools/jp1.jpg', 
            title: 'Electric Wheelchair', 
            desc: 'A motorised device that allows people with reduced mobility to move independently.' 
        },
        { 
            selector: '.Command-2', 
            img: 'tools/jp2.jpg', 
            title: 'Axillary crutches', 
            desc: 'Mobility aid device for individuals with reduced mobility.' 
        },
        { 
            selector: '.Command-3', 
            img: 'tools/jp3.jpg', 
            title: 'Fixed walker', 
            desc: 'A stability aid designed to assist individuals with limited mobility.' 
        },
        { 
            selector: '.Command-4', 
            img: 'tools/jp4.jpg', 
            title: 'Electric standing wheelchair', 
            desc: 'Allows users to transition from sitting to a standing position.' 
        },
        { 
            selector: '.Command-5', 
            img: 'tools/jp5.jpg', 
            title: 'Mecaflex shoes', 
            desc: 'Designed footwear that offers enhanced support and comfort.' 
        },
        { 
            selector: '.Command-6', 
            img: 'tools/jp6.jpg', 
            title: 'Milwaukee brace', 
            desc: 'Medical device for spine support and stabilization.' 
        },
        { 
            selector: '.Command-7', 
            img: 'tools/jp7.jpg', 
            title: 'Prostheses', 
            desc: 'Designed to replace missing or damaged body parts.' 
        },
        { 
            selector: '.Command-8', 
            img: 'tools/jp8.jpg', 
            title: 'Personal sound amplifier', 
            desc: ' Enhances sound for individuals with hearing difficulties.' 
        }
    ];

    // Attachement des événements à tous les boutons
    modalButtons.forEach(button => {
        const elements = document.querySelectorAll(button.selector);
        elements.forEach(element => {
            element.addEventListener('click', function() {
                openModal(button.img, button.title, button.desc);
            });
        });
    });

    // Fermeture avec la touche Escape (bonus)
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal && modal.style.visibility === "visible") {
            closeModal();
        }
    });
});