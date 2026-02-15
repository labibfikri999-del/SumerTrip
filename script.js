document.addEventListener('DOMContentLoaded', () => {
    console.log("Lombok Linktree Loaded 🌴");

    // Optional: Add a simple tilt effect to cards for extra "modern" feel
    const cards = document.querySelectorAll('.link-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate tilt based on mouse position
            // This is subtle
            // card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2) / 10}deg) rotateY(${-(x - rect.width/2) / 10}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            // card.style.transform = 'none';
        });
    });

    // --- Modal Logic ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalBtn = document.querySelector('.close-modal');

    window.openModal = function(title, description) {
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modalOverlay.style.display = "flex"; // Using flex to center
    }

    if (closeModalBtn) {
        closeModalBtn.onclick = function() {
            modalOverlay.style.display = "none";
        }
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modalOverlay) {
            modalOverlay.style.display = "none";
        }
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }

    // --- Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            // Get caption from sibling div
            const caption = this.nextElementSibling ? this.nextElementSibling.innerText : '';
            captionText.innerHTML = caption;
        });
    });

    if (closeLightboxBtn) {
        closeLightboxBtn.onclick = function() {
            lightbox.style.display = "none";
        }
    }
});
