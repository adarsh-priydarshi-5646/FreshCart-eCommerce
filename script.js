// Import GSAP library
gsap.registerPlugin(ScrollTrigger);

// Header Animation
gsap.fromTo(".logo h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

// Navigation Animation
gsap.fromTo("nav ul li", { opacity: 0, y: 50, stagger: 0.2 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

// Banner Animation
gsap.fromTo(".banner-content", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 1.5 });
gsap.fromTo(".banner-image img", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: 1.5 }); 

// Footer Animation
gsap.fromTo("footer p", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2 });