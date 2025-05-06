document.addEventListener('DOMContentLoaded', () => {
    // Force making all sections and cards visible on page load
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.add('visible-section');
    });

    const allCards = document.querySelectorAll('.service-card, .benefit, .step');
    allCards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateY(0)';
    });

    // Make sure services section is visible
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.style.opacity = '1';
        servicesSection.style.visibility = 'visible';
    }
    
    // Ensure title is always visible
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        heroTitle.style.visibility = 'visible';
    }

    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Initialize GSAP animations
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Hero section animations
        const heroElements = {
            subtitle: document.querySelector('.hero-content .subtitle'),
            title: document.querySelector('.hero-content h1.always-visible'),
            description: document.querySelector('.hero-description'),
            stats: document.querySelector('.animated-stats'),
            cta: document.querySelector('.hero-content .hero-cta')
        };

        if (heroElements.subtitle) {
            gsap.from(heroElements.subtitle, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2
            });
        }

        // Special handling for the title to maintain visibility
        if (heroElements.title) {
            // Don't animate opacity to 0, start from 0.9 instead
            gsap.fromTo(heroElements.title, 
                {
                    y: 50,
                    // Don't set opacity to 0
                },
                {
                    // End with opacity 1
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.4,
                    onStart: function() {
                        // Ensure it's visible as soon as animation starts
                        heroElements.title.style.opacity = '1';
                        heroElements.title.style.visibility = 'visible';
                    }
                }
            );
        }

        if (heroElements.description) {
            gsap.from(heroElements.description, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.6
            });
        }

        if (heroElements.stats) {
            gsap.from(heroElements.stats, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.8
            });
        }

        if (heroElements.cta) {
            gsap.from(heroElements.cta, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 1
            });
        }

        // About section animations
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const aboutElements = {
                header: aboutSection.querySelector('.section-header'),
                text: aboutSection.querySelector('.about-text'),
                image: aboutSection.querySelector('.about-image')
            };

            if (aboutElements.header) {
                gsap.from(aboutElements.header.children, {
                    scrollTrigger: {
                        trigger: aboutElements.header,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                });
            }

            if (aboutElements.text) {
                gsap.from(aboutElements.text, {
                    scrollTrigger: {
                        trigger: aboutElements.text,
                        start: 'top 80%'
                    },
                    x: -50,
                    opacity: 0,
                    duration: 1
                });
            }

            if (aboutElements.image) {
                gsap.from(aboutElements.image, {
                    scrollTrigger: {
                        trigger: aboutElements.image,
                        start: 'top 80%'
                    },
                    x: 50,
                    opacity: 0,
                    duration: 1
                });
            }
        }

        // Approach section animations
        const approachSection = document.getElementById('approach');
        if (approachSection) {
            const approachHeader = approachSection.querySelector('.section-header');
            const approachSteps = approachSection.querySelectorAll('.step');
            
            if (approachHeader) {
                gsap.from(approachHeader.children, {
                    scrollTrigger: {
                        trigger: approachHeader,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                });
            }
            
            if (approachSteps.length > 0) {
                gsap.from(approachSteps, {
                    scrollTrigger: {
                        trigger: approachSection.querySelector('.approach-steps'),
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                });
            }
        }

        // Why Us section animations
        const whyUsSection = document.getElementById('why-us');
        if (whyUsSection) {
            const whyUsHeader = whyUsSection.querySelector('.section-header');
            const benefits = whyUsSection.querySelectorAll('.benefit');
            
            if (whyUsHeader) {
                gsap.from(whyUsHeader.children, {
                    scrollTrigger: {
                        trigger: whyUsHeader,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                });
            }
            
            if (benefits.length > 0) {
                gsap.from(benefits, {
                    scrollTrigger: {
                        trigger: whyUsSection.querySelector('.benefits-grid'),
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15
                });
            }
        }

        // Floating shapes animation
        const floatingShapes = document.querySelectorAll('.floating-shape');
        if (floatingShapes.length > 0) {
            gsap.to(floatingShapes, {
                y: 20,
                rotation: 5,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'power1.inOut',
                stagger: {
                    amount: 0.5
                }
            });
        }

        // Scroll indicator animation
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            gsap.to(scrollIndicator, {
                y: 10,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: 'power1.inOut'
            });
        }

        // Service cards stagger animation
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid) {
            const serviceCards = servicesGrid.querySelectorAll('.service-card');
            if (serviceCards.length > 0) {
                gsap.from(serviceCards, {
                    scrollTrigger: {
                        trigger: servicesGrid,
                        start: 'top 80%'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                });
            }
        }

        // Services section animations
        if (servicesSection) {
            const servicesHeader = servicesSection.querySelector('.section-header');
            const serviceCards = servicesSection.querySelectorAll('.service-card');
            
            if (servicesHeader) {
                gsap.from(servicesHeader.children, {
                    scrollTrigger: {
                        trigger: servicesHeader,
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    onComplete: function() {
                        gsap.set(servicesHeader.children, {clearProps: "all"});
                    }
                });
            }
            
            if (serviceCards.length > 0) {
                // First make sure all cards are visible
                serviceCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.visibility = 'visible';
                    card.style.transform = 'translateY(0)';
                });
                
                // Then apply animation
                gsap.from(serviceCards, {
                    scrollTrigger: {
                        trigger: servicesSection.querySelector('.services-grid'),
                        start: 'top 80%'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    onComplete: function() {
                        // Reset any transform properties to ensure visibility
                        gsap.set(serviceCards, {
                            clearProps: "opacity,y",
                            opacity: 1,
                            y: 0
                        });
                        
                        // Apply inline styles to guarantee visibility
                        serviceCards.forEach(card => {
                            card.style.opacity = '1';
                            card.style.visibility = 'visible';
                            card.style.transform = 'translateY(0)';
                        });
                    }
                });
            }
        }
    }

    // Add 3D hover effect to all cards
    const addHoverEffect = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el) {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const xRotation = ((y - rect.height / 2) / rect.height) * 10;
                    const yRotation = ((x - rect.width / 2) / rect.width) * 10;
                    
                    el.style.transform = `
                        perspective(1000px)
                        rotateX(${-xRotation}deg)
                        rotateY(${yRotation}deg)
                        translateZ(10px)
                    `;
                });
                
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                });
            }
        });
    };
    
    // Apply hover effects to cards
    addHoverEffect('.service-card');
    addHoverEffect('.benefit');
    addHoverEffect('.step');

    // Animated Statistics Counter
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length > 0) {
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const interval = duration / countTo;
                    
                    const counter = setInterval(() => {
                        count++;
                        target.textContent = count;
                        
                        if (count >= countTo) {
                            clearInterval(counter);
                        }
                    }, interval);
                    
                    observer.unobserve(target);
                }
            });
        }, options);
        
        statElements.forEach(stat => {
            observer.observe(stat);
        });
    }

    // Mouse move effect
    const mouseEffect = document.querySelector('.mouse-effect');
    if (mouseEffect) {
        document.addEventListener('mousemove', (e) => {
            setTimeout(() => {
                mouseEffect.style.opacity = 1;
                mouseEffect.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }, 50);
        });
        
        document.addEventListener('mouseout', () => {
            mouseEffect.style.opacity = 0;
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    if (typeof gsap !== 'undefined') {
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: {
                                y: target,
                                offsetY: 80
                            },
                            ease: 'power3.inOut'
                        });
                    } else {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        }
    });

    // Form handling
    const form = document.getElementById('contact-form');
    if (form) {
        const formElements = form.querySelectorAll('input, textarea');
        
        formElements.forEach(element => {
            if (element) {
                element.addEventListener('focus', () => {
                    element.parentElement.classList.add('focused');
                });

                element.addEventListener('blur', () => {
                    if (!element.value) {
                        element.parentElement.classList.remove('focused');
                    }
                });
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            if (!data.name || !data.email || !data.message) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(form, {
                        x: [-10, 10, -10, 10, 0],
                        duration: 0.4,
                        ease: 'power2.inOut'
                    });
                }
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(form, {
                        x: [-10, 10, -10, 10, 0],
                        duration: 0.4,
                        ease: 'power2.inOut'
                    });
                }
                return;
            }

            // Animate submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                if (typeof gsap !== 'undefined') {
                    gsap.to(submitBtn, {
                        scale: 0.95,
                        duration: 0.2
                    });
                }

                // Simulate form submission
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    if (typeof gsap !== 'undefined') {
                        gsap.to(submitBtn, {
                            scale: 1,
                            duration: 0.2
                        });
                    }
                    alert('Thank you for your message! We will get back to you soon.');
                }, 1000);
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .step, .benefit').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add animation class
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);

    // Header scroll behavior
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Add header transition styles
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            header {
                transition: transform 0.3s ease-in-out;
            }
            header.scroll-down {
                transform: translateY(-100%);
            }
            header.scroll-up {
                transform: translateY(0);
            }
        </style>
    `);
});

// Add window.onload to ensure everything is visible after all resources are loaded
window.onload = function() {
    // Force making sections visible again after complete load
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.add('visible-section');
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });

    // Force cards to be visible
    const allCards = document.querySelectorAll('.service-card, .benefit, .step');
    allCards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateY(0)';
    });
};

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
    
    // Open mobile navigation
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    // Close mobile navigation
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close mobile navigation when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    });
});

// Animated stats counter
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let count = 0;
        
        const updateCount = () => {
            const increment = target / 50; // Adjust speed of count
            
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                stat.textContent = target;
            }
        };
        
        // Start counter when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 