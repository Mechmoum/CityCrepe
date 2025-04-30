/**
 * Animations for City Crêpe website
 */

// DOM elements
const heroSection = document.getElementById('hero');
const sections = document.querySelectorAll('section');

// Initialize animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize section animations with IntersectionObserver
  initSectionAnimations();
  
  // Initialize parallax effect for hero section
  initParallaxEffect();
  
  // Initialize floating elements animation
  initFloatingElements();
  
  // Initialize menu item animations
  initMenuItemAnimations();
});

// Function to initialize section animations with IntersectionObserver
function initSectionAnimations() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation class when section comes into view
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Stop observing after animation is triggered
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.15, // 15% of the section must be visible
      rootMargin: '0px' // no margin
    });
    
    // Observe all sections
    sections.forEach(section => {
      // Reset opacity to allow for fade-in animation
      section.style.opacity = '';
      sectionObserver.observe(section);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    sections.forEach(section => {
      section.classList.add('in-view');
    });
  }
}

// Function to initialize parallax effect for hero section
function initParallaxEffect() {
  if (!heroSection) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    // Apply parallax effect to hero background
    heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
    
    // Apply parallax effect to hero content
    const heroContent = heroSection.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
  });
}

// Function to initialize floating elements animation
function initFloatingElements() {
  // Select all decorative elements
  const floatingElements = document.querySelectorAll('.decorative-element');
  
  // If no elements, return
  if (!floatingElements.length) return;
  
  // Add random animation properties to each element
  floatingElements.forEach((element, index) => {
    // Set random animation duration between 6 and 12 seconds
    const duration = 6 + Math.random() * 6;
    
    // Set random animation delay
    const delay = Math.random() * 5;
    
    // Apply animation properties
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;
    
    // Alternate animation direction
    if (index % 2 === 0) {
      element.style.animationDirection = 'alternate';
    }
  });
}

// Function to initialize menu item animations
function initMenuItemAnimations() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  if (!menuItems.length) return;
  
  // Use IntersectionObserver to trigger animations
  if ('IntersectionObserver' in window) {
    const menuObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
          
          // Stop observing after animation is triggered
          menuObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
    });
    
    // Observe all menu items
    menuItems.forEach(item => {
      menuObserver.observe(item);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 100);
    });
  }
}

// Create shine effect on store stripe
function createShineEffect() {
  const storeStripe = document.querySelector('.store-stripe');
  
  if (!storeStripe) return;
  
  // Create shine element
  const shine = document.createElement('div');
  shine.classList.add('stripe-shine');
  
  storeStripe.appendChild(shine);
  
  // Animate shine effect
  function animateShine() {
    shine.style.left = '-100%';
    shine.style.transition = 'none';
    
    setTimeout(() => {
      shine.style.transition = 'left 1.5s linear';
      shine.style.left = '100%';
    }, 100);
  }
  
  // Trigger shine animation
  animateShine();
  setInterval(animateShine, 5000);
}

// Initialize animations when page is resized
window.addEventListener('resize', () => {
  // Re-initialize relevant animations if needed
});

// Initialize animation for scroll indicator
function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (!scrollIndicator) return;
  
  // Hide scroll indicator when user scrolls
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  });
}

// Function to create animated background shapes
function createBackgroundShapes() {
  const shapesContainer = document.createElement('div');
  shapesContainer.classList.add('background-shapes');
  
  // Define shape colors
  const colors = ['#7B57B2', '#4BBFBB', '#FFC72C', '#E63462'];
  
  // Create shapes
  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    shape.classList.add('bg-shape');
    
    // Randomize shape properties
    const size = 30 + Math.random() * 70;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isCircle = Math.random() > 0.5;
    
    // Apply shape styles
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.opacity = '0.05';
    shape.style.position = 'absolute';
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.borderRadius = isCircle ? '50%' : '20%';
    shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    // Apply animation properties
    shape.style.animationDuration = `${20 + Math.random() * 40}s`;
    shape.style.animationDelay = `${Math.random() * 10}s`;
    
    shapesContainer.appendChild(shape);
  }
  
  // Add shapes container to body
  document.body.appendChild(shapesContainer);
}