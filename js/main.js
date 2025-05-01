/**
 * Main JavaScript file for City Crêpe website
 */

// Menu data
const menuItems = [
  {
    id: 1,
    title: "Classique Sucre",
    description: "Crêpe traditionnelle au sucre fin",
    price: "4.50",
    image: "assets/images/crépe_fraise.jpeg",
    category: "sweet",
    isNew: false
  },
  {
    id: 2,
    title: "Nutella Fraise",
    description: "Crêpe au Nutella avec fraises fraîches",
    price: "7.90",
    image: "assets/images/crépe_fraise.jpeg",
    category: "sweet",
    isNew: true
  },
  {
    id: 3,
    title: "Caramel Beurre Salé",
    description: "Crêpe au caramel au beurre salé maison",
    price: "6.90",
    image: "assets/images/crépe_fraise.jpeg",
    category: "sweet",
    isNew: false
  },
  {
    id: 4,
    title: "Jambon Fromage",
    description: "Crêpe salée avec jambon et fromage fondu",
    price: "8.50",
    image: "assets/images/crépe_fraise.jpeg",
    category: "savory",
    isNew: false
  },
  {
    id: 5,
    title: "Complète",
    description: "Crêpe salée avec œuf, jambon et fromage",
    price: "9.90",
    image: "assets/images/crépe_fraise.jpeg",
    category: "savory",
    isNew: false
  },
  {
    id: 6,
    title: "Végétarienne",
    description: "Crêpe aux légumes de saison et fromage",
    price: "9.50",
    image: "assets/images/crépe_fraise.jpeg",
    category: "savory",
    isNew: false
  },
  {
    id: 7,
    title: "City Rainbow",
    description: "Crêpe colorée aux fruits et crème fouettée",
    price: "10.90",
    image: "assets/images/crépe_fraise.jpeg",
    category: "specials",
    isNew: true
  },
  {
    id: 8,
    title: "Bubble Dream",
    description: "Crêpe garnie de bubble tea et fruits exotiques",
    price: "11.90",
    image: "assets/images/crépe_fraise.jpeg",
    category: "specials",
    isNew: true
  }
];

// Updated ingredient list for customization
const ingredients = [
  // Crêpe Salée – Garniture principale
  { id: 1, name: "Poulet mariné", category: "salty-main", price: 1.2 },
  { id: 2, name: "Kefta", category: "salty-main", price: 1.2 },
  { id: 3, name: "Jambon de dinde", category: "salty-main", price: 1.2 },
  { id: 4, name: "Merguez", category: "salty-main", price: 1.2 },
  { id: 5, name: "Bacon", category: "salty-main", price: 1.2 },
  { id: 6, name: "Lardons", category: "salty-main", price: 1.2 },
  { id: 7, name: "Thon", category: "salty-main", price: 1.2 },
  { id: 8, name: "Saucisses", category: "salty-main", price: 1.2 },
  { id: 9, name: "Steak", category: "salty-main", price: 1.2 },
  { id: 10, name: "Saumon", category: "salty-main", price: 2.0 },

  // Crêpe Salée – Ingrédients au choix
  { id: 11, name: "Tomate", category: "salty-choice", price: 0.7 },
  { id: 12, name: "Pomme de terre", category: "salty-choice", price: 0.7 },
  { id: 13, name: "Maïs", category: "salty-choice", price: 0.7 },
  { id: 14, name: "Oignon", category: "salty-choice", price: 0.7 },
  { id: 15, name: "Olives", category: "salty-choice", price: 0.7 },
  { id: 16, name: "Poivron", category: "salty-choice", price: 0.7 },
  { id: 17, name: "Champignons", category: "salty-choice", price: 0.7 },
  { id: 18, name: "Avocat", category: "salty-special", price: 1.0 },
  { id: 19, name: "Épinard", category: "salty-special", price: 1.0 },

  // Crêpe Salée – Fromage au choix
  { id: 20, name: "Cheddar", category: "cheese", price: 0.8 },
  { id: 21, name: "Kiri", category: "cheese", price: 0.8 },
  { id: 22, name: "Chèvre", category: "cheese", price: 0.8 },
  { id: 23, name: "Mozzarella", category: "cheese", price: 0.8 },
  { id: 24, name: "Raclette", category: "cheese", price: 0.8 },
  { id: 25, name: "Vache qui rit", category: "cheese", price: 0.8 },
  { id: 26, name: "Emmental", category: "cheese", price: 0.8 },
  { id: 27, name: "Bleu", category: "cheese", price: 0.8 },

  // Crêpe Sucrée – Fruits
  { id: 28, name: "Banane", category: "sweet-fruit", price: 1.0 },
  { id: 29, name: "Ananas", category: "sweet-fruit", price: 1.0 },
  { id: 30, name: "Mangue", category: "sweet-fruit", price: 1.0 },
  { id: 31, name: "Fraises", category: "sweet-fruit", price: 2.0 },

  // Crêpe Sucrée – Nappages
  { id: 32, name: "Nutella", category: "sweet-topping", price: 1.0 },
  { id: 33, name: "Chocolat blanc", category: "sweet-topping", price: 1.0 },
  { id: 34, name: "Caramel", category: "sweet-topping", price: 1.0 },
  { id: 35, name: "Speculoos", category: "sweet-topping", price: 1.0 },
  { id: 36, name: "Kinder", category: "sweet-topping", price: 1.0 },
  { id: 37, name: "Confiture de fraise", category: "sweet-topping", price: 1.0 },
  { id: 38, name: "Confiture d’abricot", category: "sweet-topping", price: 1.0 },
  { id: 39, name: "Pâte à tartiner noisette", category: "sweet-topping", price: 1.0 },

  // Crêpe Sucrée – Ingrédients
  { id: 40, name: "Oréo", category: "sweet-ingredient", price: 1.0 },
  { id: 41, name: "KitKat", category: "sweet-ingredient", price: 1.0 },
  { id: 42, name: "Kinder Bueno", category: "sweet-ingredient", price: 1.0 },
  { id: 43, name: "Twix", category: "sweet-ingredient", price: 1.0 },
  { id: 44, name: "Snickers", category: "sweet-ingredient", price: 1.0 },
  { id: 45, name: "Mars", category: "sweet-ingredient", price: 1.0 },
  { id: 46, name: "Daim", category: "sweet-ingredient", price: 1.0 },
  { id: 47, name: "Toblerone", category: "sweet-ingredient", price: 1.0 },
  { id: 48, name: "Ferrero Rocher", category: "sweet-ingredient", price: 1.0 },
  { id: 49, name: "M&M’s", category: "sweet-ingredient", price: 1.0 },
  { id: 50, name: "Bounty", category: "sweet-ingredient", price: 1.0 },

  // Crêpe Sucrée – Fruits secs
  { id: 51, name: "Amandes", category: "sweet-nut", price: 0.5 },
  { id: 52, name: "Noisettes", category: "sweet-nut", price: 0.5 },
  { id: 53, name: "Noix", category: "sweet-nut", price: 0.5 },
  { id: 54, name: "Cacahuètes", category: "sweet-nut", price: 0.5 },
  { id: 55, name: "Pistaches", category: "sweet-nut", price: 0.5 },
];

// Gallery data
const galleryItems = [
  {
    id: 1,
    image: "assets/images/gallry.webp",
    caption: "Notre spécialité rainbow"
  },
  {
    id: 2,
    image: "assets/images/gallry.webp",
    caption: "Crêpe au caramel beurre salé"
  },
  {
    id: 3,
    image: "assets/images/gallry.webp",
    caption: "L'intérieur de notre boutique"
  },
  {
    id: 4,
    image: "assets/images/gallry.webp",
    caption: "Préparation de crêpes"
  },
  {
    id: 5,
    image: "assets/images/gallry.webp",
    caption: "Notre équipe souriante"
  },
  {
    id: 6,
    image: "assets/images/gallry.webp",
    caption: "Crêpe bubble dream"
  }
];

// DOM elements
const menuContainer = document.querySelector('.menu-items');
const filterButtons = document.querySelectorAll('.filter-btn');
const customBuilder = document.querySelector('.custom-builder');
const galleryGrid = document.querySelector('.gallery-grid');
const contactForm = document.getElementById('contactForm');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.getElementById('header');

// Initialize the website when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize menu items
  displayMenuItems('all');
  
  // Initialize gallery
  displayGalleryItems();
  
  // Initialize custom builder
  if (customBuilder) {
    displayIngredients();
  }
  
  // Add event listeners
  addEventListeners();
  
  // Create decorative elements
  createDecorativeElements();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
});

// Function to display menu items based on category filter
function displayMenuItems(category) {
  if (!menuContainer) return;
  
  // Clear current menu items
  menuContainer.innerHTML = '';
  
  // Filter items based on selected category
  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  // Create HTML for each menu item
  filteredItems.forEach(item => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    menuItemElement.dataset.category = item.category;
    
    menuItemElement.innerHTML = `
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="menu-item-content">
        <h3 class="menu-item-title">${item.title}</h3>
        <p class="menu-item-price">${item.price}€</p>
        <p class="menu-item-description">${item.description}</p>
      </div>
      ${item.isNew ? '<span class="badge">Nouveau</span>' : ''}
    `;
    
    menuContainer.appendChild(menuItemElement);
  });
  
  // Add animation to newly added items
  const items = document.querySelectorAll('.menu-item');
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

// Function to display gallery items
function displayGalleryItems() {
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = '';
  
  galleryItems.forEach(item => {
    const galleryItemElement = document.createElement('div');
    galleryItemElement.classList.add('gallery-item');
    
    galleryItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.caption}">
      <div class="gallery-caption">
        <p>${item.caption}</p>
      </div>
    `;
    
    galleryGrid.appendChild(galleryItemElement);
  });
}

// Function to display ingredients for custom builder
function displayIngredients() {
  if (!customBuilder) return;
  
  customBuilder.innerHTML = '';
  
  ingredients.forEach(ingredient => {
    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('ingredient-item');
    ingredientElement.dataset.id = ingredient.id;
    
    ingredientElement.innerHTML = `
      <img src="${ingredient.image}" alt="${ingredient.name}">
      <p>${ingredient.name}</p>
    `;
    
    ingredientElement.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
    
    customBuilder.appendChild(ingredientElement);
  });
}

// Function to display ingredients for sweet or salty crepes
function displayIngredientsByCategory(category) {
  if (!customBuilder) return;

  // Clear current ingredients
  customBuilder.innerHTML = '';

  // Filter ingredients based on selected category
  const filteredIngredients = ingredients.filter(ingredient => ingredient.category.startsWith(category));

  // Create HTML for each ingredient
  filteredIngredients.forEach(ingredient => {
    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('ingredient-item');
    ingredientElement.dataset.id = ingredient.id;

    ingredientElement.innerHTML = `
      <p>${ingredient.name} (${ingredient.price}€)</p>
    `;

    ingredientElement.addEventListener('click', function() {
      this.classList.toggle('selected');
    });

    customBuilder.appendChild(ingredientElement);
  });
}

// Update event listeners for sweet and salty buttons
document.addEventListener('DOMContentLoaded', function() {
  const sweetButton = document.querySelector('.filter-btn[data-filter="sweet"]');
  const saltyButton = document.querySelector('.filter-btn[data-filter="salty"]');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (sweetButton) {
    sweetButton.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Display sweet ingredients
      displayIngredientsByCategory('sweet');
    });
  }

  if (saltyButton) {
    saltyButton.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Display salty ingredients
      displayIngredientsByCategory('salty');
    });
  }

  // Default to sweet ingredients on page load
  displayIngredientsByCategory('sweet');
});

// Function to add all event listeners
function addEventListeners() {
  // Menu filter buttons
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the filter value
        const filterValue = this.dataset.filter;
        
        // Display menu items based on filter
        displayMenuItems(filterValue);
      });
    });
  }
  
  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      const message = this.querySelector('#message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
      }
      
      // Display loading state
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.innerHTML = 'Envoi en cours <span class="loading-dots"><span></span><span></span><span></span></span>';
      submitButton.disabled = true;
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Reset form
        this.reset();
        
        // Display success state
        submitButton.innerHTML = 'Envoyé <span class="success-icon">✓</span>';
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
  
  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Scroll event for header
  window.addEventListener('scroll', function() {
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

// Function to create decorative elements
function createDecorativeElements() {
  // Create bubbles for custom section
  const customSection = document.querySelector('.custom-section');
  if (customSection) {
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Random size between 10px and 40px
      const size = 10 + Math.random() * 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position along the width
      bubble.style.left = `${Math.random() * 100}%`;
      
      // Random animation properties
      bubble.style.setProperty('--translate-x', `${-50 + Math.random() * 100}px`);
      bubble.style.setProperty('--scale', `${0.5 + Math.random() * 1}`);
      bubble.style.setProperty('--duration', `${5 + Math.random() * 15}s`);
      bubble.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      customSection.appendChild(bubble);
    }
  }
  
  // Create sprinkle decorations for various sections
  const sections = [
    document.querySelector('.menu-section'),
    document.querySelector('.gallery-section')
  ];
  
  const colors = ['#FFC72C', '#E63462', '#4BBFBB', '#7B57B2'];
  
  sections.forEach(section => {
    if (!section) return;
    
    for (let i = 0; i < 30; i++) {
      const sprinkle = document.createElement('div');
      sprinkle.classList.add('sprinkle', 'decorative-element');
      
      // Random position
      sprinkle.style.top = `${Math.random() * 100}%`;
      sprinkle.style.left = `${Math.random() * 100}%`;
      
      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      sprinkle.style.setProperty('--color', color);
      
      // Random animation properties
      sprinkle.style.setProperty('--duration', `${20 + Math.random() * 20}s`);
      sprinkle.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      section.appendChild(sprinkle);
    }
  });
}

// Function to initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Ajouter à votre fichier main.js ou créer un nouveau fichier social-media.js

document.addEventListener('DOMContentLoaded', function() {
  // Gestion du focus et du clic pour le bouton des réseaux sociaux
  const socialButton = document.querySelector('.social-button');
  const socialIcons = document.querySelector('.social-icons');
  
  if (socialButton && socialIcons) {
    // Rendre le menu accessible au clavier
    socialButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSocialIcons();
      }
    });
    
    // Gérer le clic sur le bouton
    socialButton.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSocialIcons();
    });
    
    // Fonction pour basculer l'affichage des icônes
    function toggleSocialIcons() {
      const isVisible = getComputedStyle(socialIcons).display !== 'none';
      socialIcons.style.display = isVisible ? 'none' : 'flex';
    }
    
    // Fermer le menu si on clique ailleurs sur la page
    document.addEventListener('click', function(e) {
      if (!socialButton.contains(e.target) && !socialIcons.contains(e.target)) {
        socialIcons.style.display = 'none';
      }
    });
  }
});