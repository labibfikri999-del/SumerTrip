// SummerTrip Explore - Conversion-Optimized Interaction Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log("SummerTrip Explore Page Loaded 🌴");

    // --- WhatsApp Dynamic Routing (High-Conversion Templates) ---
    window.bookPackage = function (packageName, packagePrice) {
        const phoneNumber = "6281946601273"; // Summer Trip Admin Number

        let text = "";
        
        // Context-aware persuasive messaging
        if (packageName.includes("Three Gili")) {
            text = `Hi SummerTrip! I'm ready to dive into paradise. 🌊 Can you share availability and details for the *Ultimate Three Gili Tour* for [Number] people on [Date]? Thank you!`;
        } else if (packageName.includes("Gili Sudak")) {
            text = `Hi! I'd love to join the *Secret Island Gili Sudak Trip*. 🏝️ When is the next open trip available for [Number] people? Looking forward to the sandbars!`;
        } else if (packageName.includes("Private")) {
            text = `Hello SummerTrip! We're interested in a *Private "Your Way" Tour*. 🐒 Can you help me build a custom itinerary for [Date]? We want to see the real Lombok!`;
        } else if (packageName.includes("Rent Car")) {
            text = `Hi Team! I need a *Seamless Freedom Rental* for [Date]. 🚗 What SUVs or minivans do you have available for our group?`;
        } else {
            text = `Hi SummerTrip Explore! I'm interested in the *${packageName}* (${packagePrice}). Can you provide more details? 🌴`;
        }

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
    };

    // --- Accordion Logic (Itinerary & FAQ) ---
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Toggle active class
            content.classList.toggle('active');
            
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            } else {
                content.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            }
        });
    });

    // --- Smooth Scroll for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Navbar Background Change on Scroll ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(15, 23, 42, 0.95)";
            nav.style.padding = "10px 0";
        } else {
            nav.style.background = "rgba(15, 23, 42, 0.8)";
            nav.style.padding = "15px 0";
        }
    });

    // --- Reveal Animation on Scroll ---
    const revealElements = document.querySelectorAll('.feature-card, .package-card, .testimonial-card, .gallery-item-new');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initial state
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
