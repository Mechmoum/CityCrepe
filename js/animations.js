/**
 * City Crêpe - Script d'animations
 * Contient les effets visuels et animations du site
 */

// Initialiser les animations lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser les animations de section avec IntersectionObserver
  initSectionAnimations();
  
  // Initialiser l'effet parallaxe pour la section hero
  initParallaxEffect();
  
  // Initialiser l'animation des éléments flottants
  initFloatingElements();
  
  // Initialiser l'animation de la pluie de sucre
  initSugarRainAnimation();
  
  // Initialiser l'animation pour l'indicateur de défilement
  initScrollIndicator();
  
  // Créer les formes animées en arrière-plan
  createBackgroundShapes();
});

/**
 * Initialise les animations de section avec IntersectionObserver
 */
function initSectionAnimations() {
  // Vérifier si IntersectionObserver est pris en charge
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Ajouter la classe d'animation lorsque la section devient visible
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Arrêter d'observer après le déclenchement de l'animation
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.15, // 15% de la section doit être visible
      rootMargin: '0px' // pas de marge
    });
    
    // Observer toutes les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Réinitialiser l'opacité pour permettre l'animation de fondu
      section.style.opacity = '';
      sectionObserver.observe(section);
    });
  } else {
    // Fallback pour les navigateurs qui ne prennent pas en charge IntersectionObserver
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('in-view');
    });
  }
}

/**
 * Initialise l'effet parallaxe pour la section hero
 */
function initParallaxEffect() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    // Appliquer l'effet parallaxe à l'arrière-plan du hero
    if (scrollPosition < heroSection.offsetHeight) {
      heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
      
      // Appliquer l'effet parallaxe au contenu du hero
      const heroContent = heroSection.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    }
  });
}

/**
 * Initialise l'animation des éléments flottants
 */
function initFloatingElements() {
  // Sélectionner tous les éléments décoratifs
  const floatingElements = document.querySelectorAll('.decorative-element');
  
  // Si aucun élément, retourner
  if (!floatingElements.length) return;
  
  // Ajouter des propriétés d'animation aléatoires à chaque élément
  floatingElements.forEach((element, index) => {
    // Définir une durée d'animation aléatoire entre 6 et 12 secondes
    const duration = 6 + Math.random() * 6;
    
    // Définir un délai d'animation aléatoire
    const delay = Math.random() * 5;
    
    // Appliquer les propriétés d'animation
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;
    
    // Alterner la direction de l'animation
    if (index % 2 === 0) {
      element.style.animationDirection = 'alternate';
    }
  });
}

/**
 * Initialise l'animation de l'effet de pluie de sucre
 */
function initSugarRainAnimation() {
  // Éléments DOM pour l'effet de pluie de sucre
  const sugarRainContainer = document.getElementById('sugarRainContainer');
  const discoverMenuBtn = document.getElementById('discoverMenuBtn');
  const heroSection = document.getElementById('hero');
  
  if (!sugarRainContainer || !heroSection) return;
  
  // Variable pour suivre l'état de la cascade
  let isCascading = false;
  
  // Fonction pour créer une particule de sucre
  function createSugarParticle(x, y, size = null, duration = null) {
    const particle = document.createElement('div');
    particle.classList.add('sugar-particle');
    
    // Taille aléatoire si non spécifiée
    const particleSize = size || Math.random() * 4 + 1;
    particle.style.width = `${particleSize}px`;
    particle.style.height = `${particleSize}px`;
    
    // Position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Durée de chute aléatoire si non spécifiée
    const fallDuration = duration || Math.random() * 3 + 2;
    particle.style.animation = `sugar-fall ${fallDuration}s linear forwards`;
    
    // Ajouter au conteneur
    sugarRainContainer.appendChild(particle);
    
    // Supprimer après l'animation
    setTimeout(() => {
      particle.remove();
    }, fallDuration * 1000);
  }
  
  // Fonction pour créer l'effet de rideau de sucre
  function createSugarCurtain() {
    // Créer l'élément de rideau s'il n'existe pas
    let sugarCurtain = document.querySelector('.sugar-curtain');
    if (!sugarCurtain) {
      sugarCurtain = document.createElement('div');
      sugarCurtain.classList.add('sugar-curtain');
      sugarRainContainer.appendChild(sugarCurtain);
    }
    
    // Activer l'animation
    sugarCurtain.classList.remove('active');
    // Force reflow
    void sugarCurtain.offsetWidth;
    sugarCurtain.classList.add('active');
  }
  
  // Fonction pour créer une cascade de sucre intense
  function createSugarCascade() {
    if (isCascading) return;
    isCascading = true;
    
    // Activer l'effet de rideau
    createSugarCurtain();
    
    // Créer une pluie dense de particules
    const screenWidth = window.innerWidth;
    
    // Créer beaucoup de particules
    for (let i = 0; i < 600; i++) {
      setTimeout(() => {
        const posX = Math.random() * screenWidth;
        const posY = Math.random() * 100 - 100; // Au-dessus de l'écran
        const size = Math.random() * 6 + 1; // Tailles variées
        const duration = Math.random() * 4 + 3; // Chute plus lente
        
        createSugarParticle(posX, posY, size, duration);
      }, Math.random() * 2000); // Étalées sur 2 secondes
    }
    
    // Réinitialiser l'état après un délai
    setTimeout(() => {
      isCascading = false;
    }, 2000);
  }
  
  // Déclencher l'effet de pluie dès le chargement de la page (si la section hero est visible)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        createSugarCascade();
        // Arrêter d'observer après le premier déclenchement
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  
  observer.observe(heroSection);
  
  // Déclencher l'effet de pluie au clic sur le bouton "DÉCOUVRIR LE MENU"
  if (discoverMenuBtn) {
    discoverMenuBtn.addEventListener('click', function(e) {
      // Ne pas empêcher le comportement par défaut pour permettre le défilement jusqu'à la section menu
      createSugarCascade();
    });
  }
}

/**
 * Crée un effet de brillance sur la bande du magasin
 */
function createShineEffect() {
  const storeStripe = document.querySelector('.store-stripe');
  
  if (!storeStripe) return;
  
  // Créer l'élément de brillance
  const shine = document.createElement('div');
  shine.classList.add('stripe-shine');
  
  storeStripe.appendChild(shine);
  
  // Animer l'effet de brillance
  function animateShine() {
    shine.style.left = '-100%';
    shine.style.transition = 'none';
    
    setTimeout(() => {
      shine.style.transition = 'left 1.5s linear';
      shine.style.left = '100%';
    }, 100);
  }
  
  // Déclencher l'animation de brillance
  animateShine();
  setInterval(animateShine, 5000);
}

/**
 * Initialise l'animation pour l'indicateur de défilement
 */
function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (!scrollIndicator) return;
  
  // Masquer l'indicateur de défilement lorsque l'utilisateur défile
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }
  });
}

/**
 * Crée des formes d'arrière-plan animées
 */
function createBackgroundShapes() {
  // Vérifier si le conteneur existe déjà
  if (document.querySelector('.background-shapes')) return;
  
  const shapesContainer = document.createElement('div');
  shapesContainer.classList.add('background-shapes');
  
  // Définir les couleurs des formes
  const colors = ['#7B57B2', '#4BBFBB', '#FFC72C', '#E63462'];
  
  // Créer les formes
  for (let i = 0; i < 12; i++) {
    const shape = document.createElement('div');
    shape.classList.add('bg-shape');
    
    // Randomiser les propriétés des formes
    const size = 30 + Math.random() * 70;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isCircle = Math.random() > 0.5;
    
    // Appliquer les styles de forme
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.opacity = '0.05';
    shape.style.position = 'absolute';
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.borderRadius = isCircle ? '50%' : '20%';
    shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    // Appliquer les propriétés d'animation
    shape.style.animationDuration = `${20 + Math.random() * 40}s`;
    shape.style.animationDelay = `${Math.random() * 10}s`;
    
    shapesContainer.appendChild(shape);
  }
  
  // Ajouter le conteneur des formes aux sections appropriées
  const sections = [
    document.querySelector('.menu-section'),
    document.querySelector('.gallery-section')
  ];
  
  sections.forEach(section => {
    if (section) {
      const clonedContainer = shapesContainer.cloneNode(true);
      clonedContainer.style.position = 'absolute';
      clonedContainer.style.top = '0';
      clonedContainer.style.left = '0';
      clonedContainer.style.width = '100%';
      clonedContainer.style.height = '100%';
      clonedContainer.style.overflow = 'hidden';
      clonedContainer.style.pointerEvents = 'none';
      clonedContainer.style.zIndex = '0';
      
      section.insertBefore(clonedContainer, section.firstChild);
    }
  });
}