document.addEventListener('DOMContentLoaded', function() {
    // Make sure agency name is always displayed normally
    const agencyNameElements = document.querySelectorAll('.agency-name, .logo, .footer-logo');
    agencyNameElements.forEach(element => {
        // Remove any animation or 3D effects
        element.style.animation = 'none';
        element.style.transform = 'none';
        element.style.opacity = '1';
        element.style.visibility = 'visible';
    });
    
    // Initialize gentle animations instead of tilt effect
    initGentleAnimations();
    
    // Initialize 3D scroll animations
    init3DScrollAnimations();
    
    // Initialize 3D idle rotation for process cards
    initIdleRotation();

    // Initialize footer particles
    initFooterParticles();
});

// Initialize 3D idle rotation animations
function initIdleRotation() {
    const rotateElements = document.querySelectorAll('.rotate-idle-3d');
    
    if (rotateElements.length > 0) {
        rotateElements.forEach((element, index) => {
            // Add hover effect that pauses the animation
            element.addEventListener('mouseenter', () => {
                element.style.animationPlayState = 'paused';
                
                // Add more dramatic shadow on hover
                element.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(179, 65, 255, 0.3)';
                element.style.borderColor = 'rgba(179, 65, 255, 0.5)';
                
                // Apply custom transform based on card position
                const centerX = element.offsetWidth / 2;
                const centerY = element.offsetHeight / 2;
                
                element.style.transform = `
                    perspective(1000px)
                    rotateX(5deg)
                    rotateY(${index % 2 === 0 ? 5 : -5}deg)
                    translateZ(20px)
                `;
            });
            
            // Resume animation on mouse leave
            element.addEventListener('mouseleave', () => {
                // Let CSS handle the animation again
                element.style.animationPlayState = 'running';
                element.style.transform = '';
                element.style.boxShadow = '';
                element.style.borderColor = '';
            });
        });
    }
}

// Gentle automatic animations instead of mouse-based effects
function initGentleAnimations() {
    const elements = document.querySelectorAll('.tilt-3d, .mouse-parallax, .parallax-layer');
    
    elements.forEach(element => {
        // Remove any existing transforms
        element.style.transform = '';
        
        // Add gentle floating animation instead
        if (element.classList.contains('tilt-3d')) {
            element.classList.add('float-3d');
            element.classList.remove('tilt-3d');
        }
        
        if (element.classList.contains('mouse-parallax')) {
            element.classList.add('float-3d');
            element.classList.remove('mouse-parallax');
        }
    });
}

// Initialize 3D scroll animations
function init3DScrollAnimations() {
    // Check if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Hero section 3D animation - REMOVE OPACITY ANIMATION
        const heroTitle = document.querySelector('.hero-content h1:not(.agency-name)');
        if (heroTitle) {
            // Only apply animations to non-agency name headers
            // Make sure the title is always visible first
            heroTitle.style.opacity = '1';
            heroTitle.style.visibility = 'visible';
            
            // Modified animation that doesn't affect opacity
            gsap.to(heroTitle, {
                scrollTrigger: {
                    trigger: heroTitle,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                },
                rotateY: 30,
                rotateX: 10,
                z: 100,
                // Removed opacity: 0 to prevent fading out
                ease: 'power2.out'
            });
        }
        
        // Service cards 3D animation
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length) {
            serviceCards.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 40%',
                        scrub: 1
                    },
                    rotateY: -20,
                    rotateX: 15,
                    z: -100,
                    opacity: 0,
                    duration: 1.5,
                    delay: index * 0.2,
                    ease: 'power3.out'
                });
            });
        }
        
        // Approach steps 3D animation
        const steps = document.querySelectorAll('.step');
        if (steps.length) {
            steps.forEach((step, index) => {
                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 75%',
                        end: 'top 45%',
                        scrub: 1
                    },
                    rotateX: 10,
                    z: -50,
                    opacity: 0,
                    duration: 1,
                    delay: index * 0.15,
                    ease: 'back.out(1.7)'
                });
            });
        }
    }
}

// Function to create 3D cube
function createCube(containerId, size, images) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
    <div class="cube-3d">
        <div class="cube-face cube-front" style="width:${size}px;height:${size}px;"></div>
        <div class="cube-face cube-back" style="width:${size}px;height:${size}px;"></div>
        <div class="cube-face cube-right" style="width:${size}px;height:${size}px;"></div>
        <div class="cube-face cube-left" style="width:${size}px;height:${size}px;"></div>
        <div class="cube-face cube-top" style="width:${size}px;height:${size}px;"></div>
        <div class="cube-face cube-bottom" style="width:${size}px;height:${size}px;"></div>
    </div>
    `;
    
    const faces = container.querySelectorAll('.cube-face');
    if (images && images.length >= 6) {
        faces.forEach((face, index) => {
            face.style.backgroundImage = `url(${images[index]})`;
            face.style.backgroundSize = 'cover';
            face.style.backgroundPosition = 'center';
        });
    }
}

// Add window resize handler
window.addEventListener('resize', () => {
    // Reinitialize effects if needed
    initGentleAnimations();
});

// Add scroll-based dynamic shadows
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.glow-3d');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
            const scrollPos = window.scrollY;
            const elementPos = element.offsetTop;
            const distance = scrollPos - elementPos;
            
            const shadowX = distance * 0.01;
            const shadowY = Math.abs(distance) * 0.02 + 5;
            
            element.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(179, 65, 255, 0.5),
                                      ${shadowX * 1.5}px ${shadowY * 1.5}px 30px rgba(179, 65, 255, 0.3),
                                      ${shadowX * 2}px ${shadowY * 2}px 45px rgba(179, 65, 255, 0.1)`;
        }
    });
});

// Add footer particles initialization function
function initFooterParticles() {
    const footerParticles = document.querySelector('.footer-particles');
    if (footerParticles) {
        // Create particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('span');
            particle.classList.add('footer-particle');
            
            // Randomize position, size and animation delay
            const size = Math.random() * 4 + 2; // 2-6px
            const posX = Math.random() * 100; // 0-100%
            const posY = Math.random() * 100; // 0-100%
            const delay = Math.random() * 5; // 0-5s
            const duration = Math.random() * 10 + 10; // 10-20s
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            footerParticles.appendChild(particle);
        }
    }
}

// Add social icon 3D hover effect
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateY(10deg) rotateX(-10deg)';
            this.style.boxShadow = '0 15px 25px rgba(179, 65, 255, 0.3)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}); 