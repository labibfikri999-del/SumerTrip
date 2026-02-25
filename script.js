// --- WhatsApp Dynamic Routing ---
window.bookPackage = function (packageName, packagePrice) {
    const phoneNumber = "6281946601273"; // Summer Trip Admin Number

    // Professional Greeting template
    let text = `Halo Admin *Summer Trip Explore Lombok* 🌴\n\n`;
    text += `Saya tertarik dan ingin bertanya detail lebih lanjut mengenai:\n`;
    text += `🔹 *Paket:* ${packageName}\n`;
    text += `🔹 *Estimasi Harga:* ${packagePrice}\n\n`;
    text += `Mohon info mengenai ketersediaan jadwal, itinerary lengkap, dan fasilitasnya ya.\n\n`;
    text += `*Detail Rencana Saya:*\n`;
    text += `- Tanggal Trip : (contoh: 15 Agustus 2026)\n`;
    text += `- Jumlah Peserta : (contoh: 2 Orang)\n\n`;
    text += `Terima kasih! 🙏`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
}

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

    // --- Toast Notification Logic ---
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    let toastTimeout;

    window.showToast = function (message, type = 'success') {
        if (!toast) return;

        // Clear previous timeout if any
        if (toastTimeout) clearTimeout(toastTimeout);

        toastMessage.textContent = message;

        // Reset classes
        toast.className = 'toast';
        toastIcon.className = 'fa-solid toast-icon';

        if (type === 'success') {
            toast.classList.add('success');
            toastIcon.classList.add('fa-circle-check');
        } else if (type === 'error') {
            toast.classList.add('error');
            toastIcon.classList.add('fa-circle-exclamation');
        }

        toast.classList.add('show');

        // Hide after 3 seconds
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --- Settings, Multi-Image & File Upload Logic ---

    // Configuration: Map IDs to User-Friendly Names
    const IMAGE_CONFIG = [
        { id: 'main-bg', name: 'Background Image' },
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
                const targetElement = document.getElementById(item.id);
                if (targetElement) {
                    if (targetElement.tagName.toLowerCase() === 'img') {
                        targetElement.src = savedImage;
                    } else {
                        targetElement.style.backgroundImage = `url('${savedImage}')`;
                    }
                }
            }
        });
    }
    loadSavedImages();

    // 2. Render Image Manager
    let currentUploadId = null;
    const globalFileInput = document.getElementById('global-file-input');
    const imageManagerList = document.getElementById('image-manager-list');

    window.renderImageManager = function () {
        if (!imageManagerList) return;
        imageManagerList.innerHTML = '';

        IMAGE_CONFIG.forEach(item => {
            const targetElement = document.getElementById(item.id);
            let currentSrc = 'https://ui-avatars.com/api/?name=Image&background=0f172a&color=fff';

            if (targetElement) {
                if (targetElement.tagName.toLowerCase() === 'img') {
                    if (targetElement.src) currentSrc = targetElement.src;
                } else {
                    const bgImage = window.getComputedStyle(targetElement).backgroundImage;
                    if (bgImage !== 'none') {
                        currentSrc = bgImage.slice(5, -2).replace(/"/g, '');
                    }
                }
            }

            const div = document.createElement('div');
            div.className = 'image-manager-item';
            div.innerHTML = `
                <img src="${currentSrc}" class="image-manager-thumb" id="thumb-${item.id}">
                <div class="image-manager-info">
                    <div class="image-manager-title">${item.name}</div>
                </div>
                <div class="image-manager-actions">
                    <button class="icon-btn edit" onclick="triggerUpload('${item.id}')" title="Change Image"><i class="fa-solid fa-pen"></i></button>
                    <!-- Keep the inline style margin simple or rely on gap -->
                    <button class="icon-btn reset" onclick="resetImage('${item.id}', '${item.name}')" title="Reset to Default"><i class="fa-solid fa-rotate-left"></i></button>
                </div>
            `;
            imageManagerList.appendChild(div);
        });
    }

    // 3. Settings UI Control
    window.openSettings = function () {
        settingsModal.style.display = "flex";
        stepPassword.style.display = "block";
        stepChangePhoto.style.display = "none";
        passwordInput.value = "";
        passwordError.style.display = "none";
        renderImageManager();
    }

    window.closeSettings = function () {
        settingsModal.style.display = "none";
        if (typeof lightbox !== 'undefined') lightbox.style.display = "none";
    }

    // 4. Password Check
    window.checkPassword = function () {
        const password = passwordInput.value;
        if (password === "Summer2026") {
            stepPassword.style.display = "none";
            stepChangePhoto.style.display = "block";
        } else {
            passwordError.style.display = "block";
        }
    }

    // 5. Trigger File Upload
    window.triggerUpload = function (id) {
        currentUploadId = id;
        if (globalFileInput) globalFileInput.click();
    }

    if (globalFileInput) {
        globalFileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file && currentUploadId) {
                processAndSaveImage(currentUploadId, file);
            }
            // clear input so same file can be selected again
            globalFileInput.value = '';
        });
    }

    // 6. Process and Auto-Save Image
    function processAndSaveImage(targetId, file) {
        const targetImg = document.getElementById(targetId);
        const thumb = document.getElementById(`thumb-${targetId}`);
        const editBtn = document.querySelector(`.edit[onclick="triggerUpload('${targetId}')"]`);

        if (!targetImg) {
            showToast("Error: Target element not found.", 'error');
            return;
        }

        // Loading state
        if (thumb) thumb.style.opacity = '0.5';
        if (editBtn) {
            editBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            editBtn.disabled = true;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; // Resize large images
                const MAX_HEIGHT = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
                } else {
                    if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Output as JPEG with 70% quality to save space
                const base64String = canvas.toDataURL('image/jpeg', 0.7);

                // Update DOM elements
                if (targetImg.tagName.toLowerCase() === 'img') {
                    targetImg.src = base64String;
                } else {
                    targetImg.style.backgroundImage = `url('${base64String}')`;
                }

                if (thumb) {
                    thumb.src = base64String;
                    thumb.style.opacity = '1';
                }

                // Save to LocalStorage
                try {
                    localStorage.setItem(`saved_image_${targetId}`, base64String);
                    showToast("Image updated successfully!", 'success');
                } catch (e) {
                    showToast("Storage Error: Image is too large.", 'error');
                    console.error("LocalStorage Error:", e);
                } finally {
                    if (editBtn) {
                        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
                        editBtn.disabled = false;
                    }
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Custom Confirm Logic ---
    const confirmModal = document.getElementById('confirm-modal');
    const confirmTitle = document.getElementById('confirm-title');
    const confirmDesc = document.getElementById('confirm-desc');
    const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
    const btnConfirmOk = document.getElementById('btn-confirm-ok');

    window.customConfirm = function (title, desc, onConfirm) {
        if (!confirmModal) {
            // Fallback just in case HTML isn't loaded correctly
            if (confirm(desc)) onConfirm();
            return;
        }
        confirmTitle.textContent = title;
        confirmDesc.textContent = desc;
        confirmModal.style.display = 'flex';

        // Use standard onclick to avoid multiple event listeners stacking
        btnConfirmCancel.onclick = function () {
            confirmModal.style.display = 'none';
        };

        btnConfirmOk.onclick = function () {
            confirmModal.style.display = 'none';
            onConfirm();
        };
    };

    // 7. Reset Functionality
    window.resetImage = function (id, name) {
        customConfirm(
            "Konfirmasi Reset",
            `Apakan Anda yakin ingin mengembalikan gambar "${name}" ke versi default? Tindakan ini tidak bisa dibatalkan.`,
            function () {
                localStorage.removeItem(`saved_image_${id}`);
                location.reload();
            }
        );
    }

    // --- New Features Logic ---

    // 1. Search Bar Filter
    const searchInput = document.getElementById('package-search');
    const linkCards = document.querySelectorAll('#links-container .link-card');

    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();

            linkCards.forEach(card => {
                const title = card.querySelector('.link-title').textContent.toLowerCase();
                const desc = card.querySelector('.link-desc').textContent.toLowerCase();

                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 2. Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
