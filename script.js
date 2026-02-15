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

    window.openModal = function (title, description) {
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modalOverlay.style.display = "flex"; // Using flex to center
    }

    if (closeModalBtn) {
        closeModalBtn.onclick = function () {
            modalOverlay.style.display = "none";
        }
    }

    // Close modal when clicking outside
    window.onclick = function (event) {
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
        img.addEventListener('click', function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            // Get caption from sibling div
            const caption = this.nextElementSibling ? this.nextElementSibling.innerText : '';
            captionText.innerHTML = caption;
        });
    });

    if (closeLightboxBtn) {
        closeLightboxBtn.onclick = function () {
            lightbox.style.display = "none";
        }
    }

    // --- Settings, Multi-Image & File Upload Logic ---

    // Configuration: Map IDs to User-Friendly Names
    const IMAGE_CONFIG = [
        { id: 'profile-image', name: 'Profile Picture' },
        { id: 'img-three-gili', name: 'Three Gili Tour' },
        { id: 'img-gili-sudak', name: 'Gili Sudak Trip' },
        { id: 'img-private-tour', name: 'Private Guided Tour' },
        { id: 'img-rent-car', name: 'Rent Car / Transport' },
        { id: 'img-gallery-rinjani', name: 'Gallery: Rinjani' },
        { id: 'img-gallery-pink-beach', name: 'Gallery: Pink Beach' },
        { id: 'img-gallery-mandalika', name: 'Gallery: Mandalika' },
        { id: 'img-gallery-sade', name: 'Gallery: Sade Village' }
    ];

    const settingsModal = document.getElementById('settings-modal');
    const stepPassword = document.getElementById('step-password');
    const stepChangePhoto = document.getElementById('step-change-photo');
    const passwordInput = document.getElementById('settings-password');
    const passwordError = document.getElementById('password-error');

    const imageSelector = document.getElementById('image-selector');
    const fileInput = document.getElementById('file-upload-input');
    const previewContainer = document.getElementById('preview-container');
    const imagePreview = document.getElementById('image-preview');

    // 1. Initialize: Load all saved images from LocalStorage
    function loadSavedImages() {
        IMAGE_CONFIG.forEach(item => {
            const savedImage = localStorage.getItem(`saved_image_${item.id}`);
            if (savedImage) {
                const imgElement = document.getElementById(item.id);
                if (imgElement) imgElement.src = savedImage;
            }
        });
    }
    loadSavedImages();

    // 2. Populate Dropdown
    function populateImageSelector() {
        imageSelector.innerHTML = ''; // Clear existing
        IMAGE_CONFIG.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            imageSelector.appendChild(option);
        });
    }

    // 3. Settings UI Control
    window.openSettings = function () {
        settingsModal.style.display = "flex";
        stepPassword.style.display = "block";
        stepChangePhoto.style.display = "none";
        passwordInput.value = "";
        passwordError.style.display = "none";
        populateImageSelector();
    }

    window.closeSettings = function () {
        settingsModal.style.display = "none";
        // Convert to function call if exists, else ignore errors
        if (typeof lightbox !== 'undefined') lightbox.style.display = "none";
    }

    // 4. Password Check
    window.checkPassword = function () {
        const password = passwordInput.value;
        if (password === "Summer2026") {
            stepPassword.style.display = "none";
            stepChangePhoto.style.display = "block";
            // Trigger selector change to reset preview
            imageSelector.dispatchEvent(new Event('change'));
        } else {
            passwordError.style.display = "block";
        }
    }

    // 5. File Upload Preview Logic
    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                imagePreview.src = event.target.result;
                previewContainer.style.display = "block";
            }
            reader.readAsDataURL(file);
        }
    });

    // Reset preview when changing selection
    imageSelector.addEventListener('change', function () {
        fileInput.value = ""; // Clear file input
        previewContainer.style.display = "none";
    });

    // 6. Save Functionality
    window.saveNewPhoto = function () {
        const targetId = imageSelector.value;
        const targetImg = document.getElementById(targetId);
        const file = fileInput.files[0];

        if (!targetImg) {
            alert("Error: Target image not found.");
            return;
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const base64String = event.target.result;

                // Update DOM
                targetImg.src = base64String;

                // Save to LocalStorage
                try {
                    localStorage.setItem(`saved_image_${targetId}`, base64String);
                    alert("Image updated and saved successfully!");
                    closeSettings();
                } catch (e) {
                    alert("Storage Error: Image file is likely too large for local storage. Please try a smaller image.");
                    console.error("LocalStorage Error:", e);
                }
            }
            reader.readAsDataURL(file);
        } else {
            alert("Please select an image file first.");
        }
    }

    // 7. Reset Functionality
    window.resetSelectedPhoto = function () {
        const targetId = imageSelector.value;
        if (confirm(`Reset "${imageSelector.options[imageSelector.selectedIndex].text}" to default?`)) {
            localStorage.removeItem(`saved_image_${targetId}`);
            location.reload();
        }
    }
});
