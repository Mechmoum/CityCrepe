/**
 * City Crêpe - Script principal
 * Contient les initialisations et fonctions communes
 */

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initialisation de City Crêpe...');
  
  // Initialiser les composants UI
  initMobileMenu();
  initScrollHeader();
  initSmoothScrolling();
  initSocialMedia();
  
  // Initialiser les sections spécifiques
  initMenuSection();
  initGallerySection();
  
  // Appliquer le correctif pour le problème de défilement (IMPORTANT)
  fixScrollIssue();
  
  console.log('Initialisation terminée !');
});

/**
 * FONCTIONS D'INITIALISATION UI
 */

/**
 * Initialise le menu mobile avec toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/**
 * Change l'apparence du header au scroll
 */
function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Initialise le défilement doux pour les ancres
 * VERSION SIMPLE - sera remplacée par la version corrigée
 */
function initSmoothScrolling() {
  // Cette fonction est maintenant vide car elle sera remplacée
  // par la version améliorée dans fixScrollIssue()
  console.log("Smooth scrolling sera initialisé par le correctif...");
}

/**
 * Initialise les fonctionnalités des médias sociaux
 */
function initSocialMedia() {
  const socialButton = document.querySelector('.social-button');
  const socialIcons = document.querySelector('.social-icons');
  
  if (socialButton && socialIcons) {
    socialButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSocialIcons();
      }
    });
    
    socialButton.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSocialIcons();
    });
    
    function toggleSocialIcons() {
      const isVisible = getComputedStyle(socialIcons).display !== 'none';
      socialIcons.style.display = isVisible ? 'none' : 'flex';
    }
    
    // Fermer le menu au clic à l'extérieur
    document.addEventListener('click', function(e) {
      if (!socialButton.contains(e.target) && !socialIcons.contains(e.target)) {
        socialIcons.style.display = 'none';
      }
    });
  }
}

/**
 * Crée des éléments décoratifs pour l'ambiance visuelle
 */
function createDecorativeElements() {
  // Créer des bulles pour la section personnalisation
  const customSection = document.querySelector('.custom-section');
  if (customSection) {
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', 'decorative-element');
      
      const size = 10 + Math.random() * 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      bubble.style.left = `${Math.random() * 100}%`;
      
      bubble.style.setProperty('--translate-x', `${-50 + Math.random() * 100}px`);
      bubble.style.setProperty('--scale', `${0.5 + Math.random() * 1}`);
      bubble.style.setProperty('--duration', `${5 + Math.random() * 15}s`);
      bubble.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      customSection.appendChild(bubble);
    }
  }
  
  // Créer des confettis décoratifs pour diverses sections
  const sections = [
    document.querySelector('.menu-section'),
    document.querySelector('.gallery-section')
  ];
  
  const colors = ['#FFC72C', '#E63462', '#4BBFBB', '#7B57B2'];
  
  sections.forEach(section => {
    if (!section) return;
    
    for (let i = 0; i < 20; i++) {
      const sprinkle = document.createElement('div');
      sprinkle.classList.add('sprinkle', 'decorative-element');
      
      sprinkle.style.top = `${Math.random() * 100}%`;
      sprinkle.style.left = `${Math.random() * 100}%`;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      sprinkle.style.setProperty('--color', color);
      
      sprinkle.style.setProperty('--duration', `${20 + Math.random() * 20}s`);
      sprinkle.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      section.appendChild(sprinkle);
    }
  });
}

/**
 * SECTION MENU
 */

/**
 * Initialise la section du menu
 */
function initMenuSection() {
  // Afficher les crêpes sucrées par défaut
  if (typeof displayMenuByCategory === 'function') {
    displayMenuByCategory('sweet');
    
    // S'assurer que le bouton "Crêpes Sucrées" est actif
    const sweetButton = document.querySelector('.filter-btn[data-filter="sweet"]');
    if (sweetButton) {
      sweetButton.classList.add('active');
    }
    
    // Initialiser les filtres du menu
    initMenuFilters();
  } else {
    console.warn("La fonction displayMenuByCategory n'est pas définie. Vérifiez si menu.js est chargé.");
  }
}

/**
 * Configure les boutons de filtre du menu
 */
function initMenuFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!filterButtons.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Mettre à jour l'état actif des boutons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Afficher les éléments selon la catégorie
      const category = this.dataset.filter;
      if (typeof displayMenuByCategory === 'function') {
        displayMenuByCategory(category);
      }
    });
  });
}

/**
 * SECTION GALERIE
 */

/**
 * Initialise la section galerie
 */
function initGallerySection() {
  if (typeof displayGalleryItems === 'function') {
    displayGalleryItems();
  } else {
    console.warn("La fonction displayGalleryItems n'est pas définie. Vérifiez si menu.js est chargé.");
  }
}

/**
 * Initialise le formulaire de contact
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const message = this.querySelector('#message').value;
    
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = 'Envoi en cours <span class="loading-dots"><span></span><span></span><span></span></span>';
    submitButton.disabled = true;
    
    // Simulation d'envoi (à remplacer par un vrai appel AJAX)
    setTimeout(() => {
      this.reset();
      submitButton.innerHTML = 'Envoyé <span class="success-icon">✓</span>';
      
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }, 3000);
    }, 1500);
  });
}

/**
 * CORRECTIF POUR LE PROBLÈME DE DÉFILEMENT
 * Version simplifiée et optimisée
 */

// Fonction qui corrige le problème de défilement bloqué
function fixScrollIssue() {
  console.log("Application du correctif de défilement...");
  
  // 1. Correction des éléments de galerie
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    console.log(`Correction de ${galleryItems.length} éléments de galerie...`);
    
    galleryItems.forEach(item => {
      // Réinitialiser les styles qui peuvent causer des problèmes
      item.style.transform = "none";
      
      // Ajouter un attribut pour indiquer que l'élément a été corrigé
      if (!item.hasAttribute('data-scroll-fixed')) {
        item.setAttribute('data-scroll-fixed', 'true');
        
        // Supprimer les gestionnaires existants et ajouter un nouveau
        const newItem = item.cloneNode(true);
        if (item.parentNode) {
          item.parentNode.replaceChild(newItem, item);
        }
        
        // Ajouter un nouveau gestionnaire sécurisé
        newItem.addEventListener('click', function(e) {
          // Récupérer l'image et la légende
          const img = newItem.querySelector('img');
          const caption = newItem.querySelector('.gallery-caption p');
          
          if (img) {
            e.stopPropagation();
            e.preventDefault();
            
            // Afficher l'image dans un lightbox simplifié et sécurisé
            const imgSrc = img.getAttribute('src');
            const captionText = caption ? caption.textContent : '';
            
            console.log(`Affichage de l'image: ${imgSrc}`);
            showSimpleLightbox(imgSrc, captionText);
          }
        });
      }
    });
  }
  
  // 2. Réimplémentation simple et sécurisée du défilement fluide
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Vérifier si l'ancre a déjà été corrigée
    if (!anchor.hasAttribute('data-scroll-fixed')) {
      anchor.setAttribute('data-scroll-fixed', 'true');
      
      // Réinitialiser et ajouter un nouveau gestionnaire
      const newAnchor = anchor.cloneNode(true);
      if (anchor.parentNode) {
        anchor.parentNode.replaceChild(newAnchor, anchor);
      }
      
      newAnchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Utiliser setTimeout pour éviter les conflits
          setTimeout(() => {
            const header = document.getElementById('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 10);
        }
      });
    }
  });
}

/**
 * Affiche un lightbox simple et sécurisé
 */
function showSimpleLightbox(imgSrc, caption) {
  // Créer ou récupérer l'élément lightbox
  let lightbox = document.getElementById('simpleLightbox');
  
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'simpleLightbox';
    lightbox.className = 'simple-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-background"></div>
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <img src="" alt="Image en plein écran" class="lightbox-img">
        <p class="lightbox-caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
    
    // Ajouter les gestionnaires pour fermer le lightbox
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const background = lightbox.querySelector('.lightbox-background');
    
    const closeLightbox = function() {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    background.addEventListener('click', closeLightbox);
    
    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
      }
    });
  }
  
  // Mettre à jour le contenu
  const img = lightbox.querySelector('.lightbox-img');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  
  img.src = imgSrc;
  captionEl.textContent = caption;
  
  // Afficher le lightbox
  document.body.style.overflow = 'hidden'; // Bloquer le défilement de la page
  lightbox.style.display = 'flex';
}

// Ajouter immédiatement le style requis pour le lightbox simplifié
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    .simple-lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }
    
    .lightbox-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90vh;
      z-index: 10000;
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 30px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      padding: 0;
    }
    
    .lightbox-img {
      max-width: 100%;
      max-height: 80vh;
      display: block;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox-caption {
      color: white;
      text-align: center;
      margin-top: 15px;
      font-size: 16px;
    }
  `;
  document.head.appendChild(style);
  
  // Appliquer les correctifs après un court délai
  setTimeout(fixScrollIssue, 300);
});