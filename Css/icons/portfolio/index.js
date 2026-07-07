document.addEventListener('DOMContentLoaded', () => {
    
    // --- Responsive Mobile Navigation Logic ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    const toggleMobileMenu = () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when a link anchor is activated
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // --- Active Component Scroll Tracking (IntersectionObserver) ---
    const sections = document.querySelectorAll('.console-section');
    
    const sectionObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "-10% 0px -40% 0px"
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Introduce structural revealing animation class
                entry.target.classList.add('visible');
                
                // Track current system state active ID
                const currentId = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Dynamic Testimonials Carousel Core Engine ---
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-right');
    const prevButton = document.querySelector('.btn-left');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);

    let currentSlideIndex = 0;

    const updateSlidePositions = (targetIndex) => {
        slides.forEach((slide, index) => {
            if (index === targetIndex) {
                slide.classList.add('current-slide');
            } else {
                slide.classList.remove('current-slide');
            }
        });

        dots.forEach((dot, index) => {
            if (index === targetIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
        
        currentSlideIndex = targetIndex;
    };

    nextButton.addEventListener('click', () => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0; // Loop back
        updateSlidePositions(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        let prevIndex = currentSlideIndex - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1; // Loop to end
        updateSlidePositions(prevIndex);
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;

        const targetIndex = dots.indexOf(targetDot);
        updateSlidePositions(targetIndex);
    });

    // Optional Auto-Cycle Routine for Carousel System Frame (Every 8000ms)
    setInterval(() => {
        let nextIndex = currentSlideIndex + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        updateSlidePositions(nextIndex);
    }, 8000);
});