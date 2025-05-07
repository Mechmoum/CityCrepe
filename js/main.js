/**
 * Main JavaScript file for City Crêpe website
 */

// Menu data avec les nouvelles catégories
const menuItems = [
  // CRÊPES SUCRÉES
  {
    id: 1,
    title: "La spéciale",
    description: "Galak - Fraises - Petit beurre",
    price: "5.90",
    image: "assets/images/fruity.png",
    category: "sweet",
    isNew: false
  },
  {
    id: 2,
    title: "La smoothie",
    description: "Crunch blanc - Fraises-Banane",
    price: "5.90",
    image: "assets/images/confiture.png",
    category: "sweet",
    isNew: true
  },
  {
    id: 3,
    title: "La Famous",
    description: "Kinder Maxi - Gateau Oreo - Banane - Coco",
    price: "5.90",
    image: "assets/images/famous.png",
    category: "sweet",
    isNew: false
  },

  {
    id: 4,
    title: "La Sunshine",
    description: "Crunch au lait - Poire - Amande",
    price: "5.90",
    image: "assets/images/sunchine.png",
    category: "sweet",
    isNew: false
  },
  {
    id: 5,
    title: "La Fruity",
    description: "Créme Spéculoos - Coco - Ananas - Banane",
    price: "5.90",
    image: "assets/images/fruity.png",
    category: "sweet",
    isNew: false
  },

  {
    id: 6,
    title: "La 3 choco",
    description: "Nutella - Galak - Milka Caramel",
    price: "5.90",
    image: "assets/images/3 choco.png",
    category: "sweet",
    isNew: false
  },

  // CRÊPES SALÉES
  {
    id: 7,
    title: "La Savoureuse",
    description: "Poulet - Coulommiers - Oignons frits - Olives",
    price: "7.00",
    image: "assets/images/savoureuse.png",
    category: "savory",
    isNew: false
  },
  {
    id: 8,
    title: "L'océane",
    description: "Thon - Oeuf - Oignons frits - Olives",
    price: "7.50",
    image: "assets/images/vege.png",
    category: "savory",
    isNew: false
  },
  {
    id: 9,
    title: "La Végé",
    description: "Épinards - Poivrons - Olives - Tomates - Maïs - Champignons",
    price: "7.00",
    image: "assets/images/vege.png",
    category: "savory",
    isNew: false
  },
  {
    id: 10,
    title: "La Bourgeoise",
    description: "Épinards - Chèvre - Miel - Noix",
    price: "7.50",
    image: "assets/images/bourgeoise.png",
    category: "savory",
    isNew: false
  },
  {
    id: 11,
    title: "La Chikanos",
    description: "Tenders - Merguez - Oeuf - Poivrons",
    price: "8.50",
    image: "assets/images/chicanos.png",
    category: "savory",
    isNew: false
  },
  {
    id: 12,
    title: "La Carnivore",
    description: "Poulet Mariné - Kefta - Crème de Roquefort - Oignons frits",
    price: "8.50",
    image: "assets/images/carnivore.png",
    category: "savory",
    isNew: false
  },
  {
    id: 13,
    title: "La Rakly",
    description: "Bacon - Jambon de dinde - Raclette - Pomme de terre",
    price: "8.50",
    image: "assets/images/rakly.png",
    category: "savory",
    isNew: false
  },
  {
    id: 14,
    title: "La Quality's",
    description: "Saumon - Chèvre - Kiri - Tomates - Maïs - Crème fraîche",
    price: "9.00",
    image: "assets/images/vege.png",
    category: "savory",
    isNew: false
  },
  {
    id: 15,
    title: "La Frenchy's",
    description: "Poulet mariné - Lardon - Boursin - Pomme de terre - Champignons",
    price: "8.50",
    image: "assets/images/frenchys.png",
    category: "savory",
    isNew: false
  },
  {
    id: 16,
    title: "La Bronx",
    description: "Poulet mariné - Kefta - Oeuf - Cheddar - Kiri - Pomme de terre - Olives",
    price: "9.00",
    image: "assets/images/bronx.png",
    category: "savory",
    isNew: false
  },

  // SMOOTHIES
  {
    id: 17,
    title: "Smoothie 1 fruit",
    description: "Smoothie avec un fruit au choix",
    price: "5.00",
    image: "assets/images/milkshake-fraise.png",
    category: "smoothies",
    isNew: false
  },
  {
    id: 18,
    title: "Smoothie Fraise",
    description: "Smoothie aux fraises fraîches",
    price: "6.00",
    image: "assets/images/milkshake-fraise.png",
    category: "smoothies",
    isNew: false
  },
  {
    id: 19,
    title: "Bubble Tea",
    description: "Un sirop et une perle au choix",
    price: "6.00",
    image: "assets/images/milkshake-fraise.png",
    category: "smoothies",
    isNew: false
  },

  // MILKSHAKES
  {
    id: 20,
    title: "Le Milkshake",
    description: "Milkshake avec 1 ingrédient au choix",
    price: "5.00",
    image: "assets/images/milkshake.png",
    category: "milkshakes",
    isNew: false
  },
  {
    id: 21,
    title: "Le Milkshake à la fraise",
    description: "Milkshake à la fraise",
    price: "6.00",
    image: "assets/images/milkshake-fraise.png",
    category: "milkshakes",
    isNew: false
  },
  // WAFFLES
  {
    id: 22,
    title: "Le spéciale",
    description: "Galak - fraises - petit beurre",
    price: "3.50",
    image: "assets/images/milkshake.png",
    category: "waffles",
    isNew: false
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
  { id: 38, name: "Confiture d'abricot", category: "sweet-topping", price: 1.0 },
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
  { id: 49, name: "M&M's", category: "sweet-ingredient", price: 1.0 },
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

// ********************
// FONCTIONS DE GESTION DU MENU
// ********************
// Fonction pour afficher les éléments du menu par catégorie avec boutons "Composer"
// Fonction modifiée pour remplacer les boutons par des liens directs
function displayMenuByCategory(category) {
  console.log("Affichage de la catégorie:", category);
  const menuContainer = document.querySelector('.menu-items');
  if (!menuContainer) {
    console.error("Erreur: Conteneur .menu-items non trouvé");
    return;
  }

  // Vider le conteneur
  menuContainer.innerHTML = '';

  // Filtrer les éléments du menu selon la catégorie
  const filteredItems = menuItems.filter(item => item.category === category);

  // Si aucun élément trouvé
  if (filteredItems.length === 0) {
    console.log("Aucun élément trouvé pour la catégorie:", category);
    menuContainer.innerHTML = '<p class="no-items">Aucun élément trouvé dans cette catégorie.</p>';
    return;
  }

  console.log(`${filteredItems.length} éléments trouvés pour la catégorie:`, category);

  // Liens PDF pour chaque catégorie
  const categoryPdfMap = {
    'sweet': "assets/documents/crépes sucrée.pdf",
    'savory': "assets/documents/crépe salé.pdf",
    'smoothies': "assets/documents/smothis.pdf",
    'milkshakes': "assets/documents/smothis.pdf",
    'waffles': "assets/documents/crépes sucrée.pdf"
  };

  // Obtenir le lien PDF pour la catégorie actuelle
  const pdfLink = categoryPdfMap[category] || '#';

  // Créer les éléments HTML pour chaque item
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
        <a href="${pdfLink}" class="compose-btn" target="_blank">Composer</a>
      </div>
      ${item.isNew ? '<span class="badge">Nouveau</span>' : ''}
    `;

    menuContainer.appendChild(menuItemElement);
  });

  // Ajouter une animation avec délai
  const items = document.querySelectorAll('.menu-item');
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

// Fonction pour ajouter les écouteurs d'événements aux boutons "Composer"
function addComposeButtonListeners() {
  const composeButtons = document.querySelectorAll('.compose-btn');
  if (!composeButtons.length) {
    console.log("Aucun bouton Composer trouvé");
    return;
  }

  console.log(`Ajout d'écouteurs d'événements à ${composeButtons.length} boutons Composer`);

  // Retirer tous les écouteurs précédents pour éviter les doublons
  composeButtons.forEach(button => {
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
  });

  // Récupérer à nouveau les boutons après le remplacement
  const newComposeButtons = document.querySelectorAll('.compose-btn');

  // Ajouter les nouveaux écouteurs
  newComposeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Bouton Composer cliqué");
      const category = this.dataset.category;
      console.log("Catégorie:", category);
      if (category) {
        openCategoryPdf(category);
      } else {
        console.error("Erreur: Catégorie non trouvée sur le bouton");
      }
    });
  });
}

// Fonction pour vérifier que le PDF existe
function checkPdfExists(pdfPath) {
  // Créer un objet XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configurer une requête HEAD (pour vérifier l'existence sans télécharger le contenu)
  xhr.open('HEAD', pdfPath, false);

  try {
    // Envoyer la requête
    xhr.send();

    // Vérifier le statut de la réponse
    if (xhr.status === 200) {
      console.log(`Le PDF existe: ${pdfPath}`);
      return true;
    } else {
      console.error(`Erreur: Le PDF n'existe pas: ${pdfPath} (Statut: ${xhr.status})`);
      return false;
    }
  } catch (error) {
    console.error(`Erreur lors de la vérification du PDF: ${pdfPath}`, error);
    return false;
  }
}

// Fonction pour ouvrir le PDF correspondant à la catégorie
function openCategoryPdf(category) {
  console.log("Ouverture du PDF pour la catégorie:", category);

  // Mapper les catégories aux noms de fichiers PDF
  const categoryPdfMap = {
    'sweet': 'assets/documents/crépes sucrée.pdf',
    'savory': 'assets/documents/crépes sucrée.pdf',
    'smoothies': 'assets/documents/smoothies.pdf',
    'milkshakes': 'assets/documents/milkshakes.pdf',
    'waffles': 'assets/documents/waffles.pdf'
  };

  // Obtenir le chemin du PDF
  const pdfPath = categoryPdfMap[category];
  console.log("Chemin du PDF:", pdfPath);

  if (!pdfPath) {
    console.error("Erreur: Chemin du PDF non trouvé pour la catégorie", category);
    alert(`Désolé, le PDF pour cette catégorie n'est pas disponible.`);
    return;
  }

  // Ouvrir le PDF dans un modal
  openPdfModal(pdfPath, getCategoryTitle(category));
}

// Fonction pour obtenir le titre français de la catégorie
function getCategoryTitle(category) {
  const categoryTitles = {
    'sweet': 'Crêpes Sucrées',
    'savory': 'Crêpes Salées',
    'smoothies': 'Smoothies',
    'milkshakes': 'Milkshakes',
    'waffles': 'Waffles'
  };

  return categoryTitles[category] || 'Menu';
}

// Fonction pour ouvrir un PDF dans un modal
function openPdfModal(pdfPath, title) {
  console.log(`Tentative d'ouverture du PDF: ${pdfPath}`);

  // Vérifier si le modal existe déjà, sinon le créer
  let pdfModal = document.getElementById('pdfModal');

  if (!pdfModal) {
    console.log("Création du modal PDF");
    // Créer le modal s'il n'existe pas
    pdfModal = document.createElement('div');
    pdfModal.id = 'pdfModal';
    pdfModal.className = 'pdf-modal';

    pdfModal.innerHTML = `
      <div class="pdf-close" id="closePdfModal">×</div>
      <div class="pdf-container">
        <div class="pdf-header">
          <h3 id="pdfTitle"></h3>
        </div>
        <iframe class="pdf-iframe" id="pdfIframe"></iframe>
      </div>
    `;

    document.body.appendChild(pdfModal);

    // Ajouter l'écouteur pour fermer le modal
    const closeButton = document.getElementById('closePdfModal');
    if (closeButton) {
      closeButton.addEventListener('click', function () {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Fermer le modal en cliquant en dehors du contenu
    pdfModal.addEventListener('click', function (e) {
      if (e.target === pdfModal) {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Fermer le modal avec la touche Echap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
        pdfModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Mettre à jour le titre et le chemin du PDF
  const pdfTitle = document.getElementById('pdfTitle');
  const pdfIframe = document.getElementById('pdfIframe');

  if (pdfTitle) pdfTitle.textContent = `Composer votre ${title}`;
  if (pdfIframe) {
    console.log(`Chargement du PDF dans l'iframe: ${pdfPath}`);
    pdfIframe.src = pdfPath;

    // Vérifier que l'iframe se charge correctement
    pdfIframe.onerror = function () {
      console.error(`Erreur lors du chargement du PDF dans l'iframe: ${pdfPath}`);
      alert(`Impossible de charger le PDF. Veuillez vérifier que le fichier existe.`);
    };
  }

  // Afficher le modal
  pdfModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps
}

function initMenuFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!filterButtons) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Mettre à jour l'état actif des boutons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Afficher les éléments selon la catégorie
      const category = this.dataset.filter;
      displayMenuByCategory(category);
    });
  });
}

// ********************
// FONCTIONS GALERIE
// ********************
function displayGalleryItems() {
  const galleryGrid = document.querySelector('.gallery-grid');
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

// ********************
// FONCTIONS PERSONNALISATION
// ********************
function displayIngredientsByCategory(category) {
  const customBuilder = document.querySelector('.custom-builder');
  if (!customBuilder) return;

  customBuilder.innerHTML = '';

  const filteredIngredients = ingredients.filter(ingredient => ingredient.category.startsWith(category));

  filteredIngredients.forEach(ingredient => {
    const ingredientElement = document.createElement('div');
    ingredientElement.classList.add('ingredient-item');
    ingredientElement.dataset.id = ingredient.id;

    ingredientElement.innerHTML = `
      <p>${ingredient.name} (${ingredient.price}€)</p>
    `;

    ingredientElement.addEventListener('click', function () {
      this.classList.toggle('selected');
    });

    customBuilder.appendChild(ingredientElement);
  });
}

function initCustomSection() {
  const customBuilder = document.querySelector('.custom-builder');
  if (!customBuilder) return;

  // Afficher les ingrédients sucrés par défaut
  displayIngredientsByCategory('sweet');

  // Ajouter les écouteurs pour les boutons de filtre
  const sweetButton = document.querySelector('.custom-section .filter-btn[data-filter="sweet"]');
  const saltyButton = document.querySelector('.custom-section .filter-btn[data-filter="salty"]');

  if (sweetButton) {
    sweetButton.classList.add('active');
    sweetButton.addEventListener('click', function () {
      document.querySelectorAll('.custom-section .filter-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      displayIngredientsByCategory('sweet');
    });
  }

  if (saltyButton) {
    saltyButton.addEventListener('click', function () {
      document.querySelectorAll('.custom-section .filter-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      displayIngredientsByCategory('salty');
    });
  }
}

// ********************
// FONCTIONS UI GÉNÉRALES
// ********************
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
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

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function createDecorativeElements() {
  // Create bubbles for custom section
  const customSection = document.querySelector('.custom-section');
  if (customSection) {
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

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

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const header = document.getElementById('header');
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

function initSocialMedia() {
  const socialButton = document.querySelector('.social-button');
  const socialIcons = document.querySelector('.social-icons');

  if (socialButton && socialIcons) {
    socialButton.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSocialIcons();
      }
    });

    socialButton.addEventListener('click', function (e) {
      e.preventDefault();
      toggleSocialIcons();
    });

    function toggleSocialIcons() {
      const isVisible = getComputedStyle(socialIcons).display !== 'none';
      socialIcons.style.display = isVisible ? 'none' : 'flex';
    }

    document.addEventListener('click', function (e) {
      if (!socialButton.contains(e.target) && !socialIcons.contains(e.target)) {
        socialIcons.style.display = 'none';
      }
    });
  }
}

// ********************
// INITIALISATION GLOBALE
// ********************
window.addEventListener('DOMContentLoaded', function () {
  console.log('Initialisation de City Crêpe...');

  // ⚠️ IMPORTANT : Afficher les crêpes sucrées par défaut
  displayMenuByCategory('sweet');

  // S'assurer que le bouton "Crêpes Sucrées" est actif
  const sweetButton = document.querySelector('.filter-btn[data-filter="sweet"]');
  if (sweetButton) {
    sweetButton.classList.add('active');
  }

  // Initialiser les filtres du menu
  initMenuFilters();

  // Initialiser la galerie
  displayGalleryItems();

  // Initialiser la section de personnalisation
  initCustomSection();

  // Initialiser les fonctionnalités générales de l'interface
  initContactForm();
  initMobileMenu();
  initScrollHeader();
  createDecorativeElements();
  initSmoothScrolling();
  initSocialMedia();

  console.log('Initialisation terminée !');
});