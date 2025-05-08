/**
 * City Crêpe - Script de gestion du menu
 * Contient les données et fonctions liées au menu et à la galerie
 */

// ====================================================
// DONNÉES DU MENU
// ====================================================

/**
 * Éléments du menu par catégorie
 */
const menuItems = [
    // CRÊPES SUCRÉES
    {
        id: 1,
        title: "La spéciale",
        description: "Galak - Fraises - Petit beurre",
        price: "5.90",
        image: "assets/images/menu/3 choco.jpg",
        category: "sweet",
        isNew: false
    },
    {
        id: 2,
        title: "La smoothie",
        description: "Crunch blanc - Fraises-Banane",
        price: "5.90",
        image: "assets/images/menu/nutella.jpg",
        category: "sweet",
        isNew: true
    },
    {
        id: 3,
        title: "La Famous",
        description: "Kinder Maxi - Gateau Oreo - Banane - Coco",
        price: "5.90",
        image: "assets/images/menu/famous.jpg",
        category: "sweet",
        isNew: false
    },
    {
        id: 4,
        title: "La Sunshine",
        description: "Crunch au lait - Poire - Amande",
        price: "5.90",
        image: "assets/images/menu/sunchine.jpg",
        category: "sweet",
        isNew: false
    },
    {
        id: 5,
        title: "La Fruity",
        description: "Créme Spéculoos - Coco - Ananas - Banane",
        price: "5.90",
        image: "assets/images/menu/fruity.jpg",
        category: "sweet",
        isNew: false
    },
    {
        id: 6,
        title: "La 3 choco",
        description: "Nutella - Galak - Milka Caramel",
        price: "5.90",
        image: "assets/images/menu/3 choco.jpg",
        category: "sweet",
        isNew: false
    },

    // CRÊPES SALÉES
    {
        id: 7,
        title: "La Savoureuse",
        description: "Poulet - Coulommiers - Oignons frits - Olives",
        price: "7.00",
        image: "assets/images/menu/savoureuse.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 8,
        title: "L'océane",
        description: "Thon - Oeuf - Oignons frits - Olives",
        price: "7.50",
        image: "assets/images/menu/oceane.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 9,
        title: "La Végé",
        description: "Épinards - Poivrons - Olives - Tomates - Maïs - Champignons",
        price: "7.00",
        image: "assets/images/menu/vege.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 10,
        title: "La Bourgeoise",
        description: "Épinards - Chèvre - Miel - Noix",
        price: "7.50",
        image: "assets/images/menu/bourgeoise.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 11,
        title: "La Chikanos",
        description: "Tenders - Merguez - Oeuf - Poivrons",
        price: "8.50",
        image: "assets/images/menu/chicanos.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 12,
        title: "La Carnivore",
        description: "Poulet Mariné - Kefta - Crème de Roquefort - Oignons frits",
        price: "8.50",
        image: "assets/images/menu/carnivore.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 13,
        title: "La Rakly",
        description: "Bacon - Jambon de dinde - Raclette - Pomme de terre",
        price: "8.50",
        image: "assets/images/menu/rakly.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 14,
        title: "La Quality's",
        description: "Saumon - Chèvre - Kiri - Tomates - Maïs - Crème fraîche",
        price: "9.00",
        image: "assets/images/menu/rakly.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 15,
        title: "La Frenchy's",
        description: "Poulet mariné - Lardon - Boursin - Pomme de terre - Champignons",
        price: "8.50",
        image: "assets/images/menu/frenchys.jpg",
        category: "savory",
        isNew: false
    },
    {
        id: 16,
        title: "La Bronx",
        description: "Poulet mariné - Kefta - Oeuf - Cheddar - Kiri - Pomme de terre - Olives",
        price: "9.00",
        image: "assets/images/menu/bronx.jpg",
        category: "savory",
        isNew: false
    },

    // SMOOTHIES
    {
        id: 17,
        title: "Smoothie 1 fruit",
        description: "Smoothie avec un fruit au choix",
        price: "5.00",
        image: "assets/images/menu/milkshake-fraise.jpg",
        category: "smoothies",
        isNew: false
    },
    {
        id: 18,
        title: "Smoothie Fraise",
        description: "Smoothie aux fraises fraîches",
        price: "6.00",
        image: "assets/images/menu/milkshake-fraise.jpg",
        category: "smoothies",
        isNew: false
    },

    // MILKSHAKES
    {
        id: 20,
        title: "Le Milkshake",
        description: "Milkshake avec 1 ingrédient au choix",
        price: "5.00",
        image: "assets/images/menu/milkshake-chocolat.jpg",
        category: "milkshakes",
        isNew: false
    },
    {
        id: 21,
        title: "Le Milkshake à la fraise",
        description: "Milkshake à la fraise",
        price: "6.00",
        image: "assets/images/menu/milkshake-fraise.jpg",
        category: "milkshakes",
        isNew: false
    },

    // WAFFLES
    {
        id: 22,
        title: "Le spéciale",
        description: "Galak - fraises - petit beurre",
        price: "3.50",
        image: "assets/images/menu/milkshake-banane.jpg",
        category: "waffles",
        isNew: false
    }

];

/**
 * Données pour la galerie
 */
const galleryItems = [
    {
        id: 1,
        image: "assets/images/gallery/gallry.webp",
        caption: "Notre spécialité rainbow"
    },
    {
        id: 2,
        image: "assets/images/gallery/gallry.webp",
        caption: "Crêpe au caramel beurre salé"
    },
    {
        id: 3,
        image: "assets/images/gallery/gallry.webp",
        caption: "L'intérieur de notre boutique"
    },
    {
        id: 4,
        image: "assets/images/gallery/gallry.webp",
        caption: "Préparation de crêpes"
    },
    {
        id: 5,
        image: "assets/images/gallery/gallry.webp",
        caption: "Notre équipe souriante"
    },
    {
        id: 6,
        image: "assets/images/gallery/gallry.webp",
        caption: "Crêpe bubble dream"
    }
];

// ====================================================
// FONCTIONS DU MENU
// ====================================================

/**
 * Affiche les éléments du menu par catégorie
 * @param {string} category - Catégorie à afficher ('sweet', 'savory', etc.)
 */
/**
 * Affiche les éléments du menu par catégorie
 * @param {string} category - Catégorie à afficher ('sweet', 'savory', etc.)
 */
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
    'milkshakes': "assets/documents/crépes sucrée.pdf",
    'waffles': "assets/documents/smothis.pdf"
  };

  // Obtenir le lien PDF pour la catégorie actuelle
  const pdfLink = categoryPdfMap[category] || '#';

  // Créer les éléments HTML pour chaque item
  filteredItems.forEach((item, index) => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    menuItemElement.dataset.category = item.category;
    
    // Animation en séquence avec délai
    menuItemElement.style.opacity = '0';
    menuItemElement.style.transform = 'translateY(20px)';
    menuItemElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    menuItemElement.style.transitionDelay = `${index * 0.1}s`;
    
    // Structure HTML améliorée pour les cartes de menu
    menuItemElement.innerHTML = `
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        ${item.isNew ? '<span class="badge">Nouveau</span>' : ''}
      </div>
      <div class="menu-item-content">
        <h3 class="menu-item-title">${item.title}</h3>
        <p class="menu-item-price">${item.price}€</p>
        <p class="menu-item-description">${item.description}</p>
        <a href="${pdfLink}" class="compose-btn" target="_blank">Composer</a>
      </div>
    `;

    menuContainer.appendChild(menuItemElement);
    
    // Forcer un reflow pour déclencher l'animation d'entrée
    setTimeout(() => {
      menuItemElement.style.opacity = '1';
      menuItemElement.style.transform = 'translateY(0)';
    }, 10);
  });

  // Ajouter des écouteurs d'événements aux boutons "Composer"
  addComposeButtonListeners();
  
  // S'assurer que toutes les images sont chargées correctement
  const menuImages = menuContainer.querySelectorAll('.menu-item-image img');
  menuImages.forEach(img => {
    img.onerror = function() {
      // En cas d'erreur de chargement, afficher une image par défaut
      this.src = 'assets/images/menu/3 choco.png';
    };
    
    // Vérifier si l'image est déjà dans le cache
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      // Ajouter une transition fluide pour le chargement
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease';
      img.onload = function() {
        this.style.opacity = '1';
      };
    }
  });
}
/**
 * Ajoute des écouteurs d'événements aux boutons "Composer"
 */
function addComposeButtonListeners() {
    const composeButtons = document.querySelectorAll('.compose-btn');

    if (!composeButtons.length) {
        console.log("Aucun bouton Composer trouvé");
        return;
    }

    // Retirer tous les écouteurs précédents pour éviter les doublons
    composeButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });

    // Récupérer à nouveau les boutons après le remplacement
    const newComposeButtons = document.querySelectorAll('.compose-btn');

    // Ajouter les nouveaux écouteurs
    newComposeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Pour des fins de démonstration, nous permettons le comportement par défaut
            // qui est d'ouvrir le PDF. Dans une version complète, on pourrait
            // remplacer cela par l'ouverture d'un modal de personnalisation.
            console.log("Bouton Composer cliqué");
        });
    });
}

/**
 * Ouvre un PDF dans un modal
 * @param {string} pdfPath - Chemin vers le fichier PDF
 * @param {string} title - Titre à afficher dans le modal
 */
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
            <div class="pdf-container">
              <div class="pdf-header">
                <h3 id="pdfTitle"></h3>
                <div class="pdf-close" id="closePdfModal">×</div>
              </div>
              <iframe class="pdf-iframe" id="pdfIframe"></iframe>
            </div>
        `;

        document.body.appendChild(pdfModal);

        // Ajouter l'écouteur pour fermer le modal
        const closeButton = document.getElementById('closePdfModal');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                pdfModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Fermer le modal en cliquant en dehors du contenu
        pdfModal.addEventListener('click', function(e) {
            if (e.target === pdfModal) {
                pdfModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Fermer le modal avec la touche Echap
        document.addEventListener('keydown', function(e) {
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
        pdfIframe.onerror = function() {
            console.error(`Erreur lors du chargement du PDF dans l'iframe: ${pdfPath}`);
            alert(`Impossible de charger le PDF. Veuillez vérifier que le fichier existe.`);
        };
    }

    // Afficher le modal
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps
}

/**
 * Obtient le titre français de la catégorie
 * @param {string} category - Code de la catégorie
 * @returns {string} Titre de la catégorie en français
 */
function getCategoryTitle(category) {
    const categoryTitles = {
        'sweet': 'Crêpes Sucrées',
        'savory': 'Crêpes Salées',
        'smoothies': 'Smoothies',
        'milkshakes': 'Milkshakes',
        'waffles': 'Gaufres'
    };

    return categoryTitles[category] || 'Menu';
}

// ====================================================
// FONCTIONS DE GALERIE
// ====================================================

/**
 * Affiche les éléments de la galerie
 */
function displayGalleryItems() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    galleryItems.forEach((item, index) => {
        const galleryItemElement = document.createElement('div');
        galleryItemElement.classList.add('gallery-item');

        // Attribuer un délai d'animation basé sur l'index
        galleryItemElement.style.animationDelay = `${index * 0.1}s`;

        galleryItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-caption">
              <p>${item.caption}</p>
            </div>
        `;

        galleryItemElement.addEventListener('click', function() {
            // Ouvrir l'image en plein écran ou dans un lightbox
            openLightbox(item.image, item.caption);
        });

        galleryGrid.appendChild(galleryItemElement);
    });
}

/**
 * Ouvre une image dans un lightbox
 * @param {string} imageSrc - Source de l'image
 * @param {string} caption - Légende de l'image
 */
function openLightbox(imageSrc, caption) {
    // Vérifier si le lightbox existe déjà, sinon le créer
    let lightbox = document.getElementById('galleryLightbox');

    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'galleryLightbox';
        lightbox.className = 'gallery-lightbox';

        lightbox.innerHTML = `
            <div class="lightbox-container">
              <div class="lightbox-close">×</div>
              <img class="lightbox-image" src="" alt="">
              <div class="lightbox-caption"></div>
            </div>
        `;

        document.body.appendChild(lightbox);

        // Fermer le lightbox au clic sur le bouton de fermeture
        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Fermer le lightbox en cliquant en dehors de l'image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-container')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Fermer le lightbox avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Mettre à jour l'image et la légende
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');

    if (lightboxImage) lightboxImage.src = imageSrc;
    if (lightboxCaption) lightboxCaption.textContent = caption;

    // Afficher le lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement
}

/**
 * CORRECTIFS POUR LES PROBLÈMES DE HOVER ET DÉFILEMENT
 */

/**
 * Fonction pour corriger le problème de hover sur les items du menu
 */
function fixMenuHoverIssue() {
    console.log("Application du correctif pour le hover du menu...");
    
    // Ajouter les styles CSS nécessaires
    const styleElement = document.createElement('style');
    styleElement.id = 'menu-hover-fix-styles';
    
    // Si le style existe déjà, le supprimer
    const existingStyle = document.getElementById('menu-hover-fix-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Ajouter les styles
    styleElement.textContent = `
        /* Correction pour les éléments de menu qui disparaissent au hover */
        .menu-item {
            /* Supprimer les transformations par défaut problématiques */
            backface-visibility: visible !important;
            -webkit-backface-visibility: visible !important;
            /* Améliorer le rendu */
            will-change: transform;
            /* Placer au-dessus des autres éléments */
            z-index: 1;
            /* Transition améliorée */
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            /* Assurer la visibilité */
            opacity: 1 !important;
        }

        /* Alternance des rotations avec des classes */
        .menu-item.menu-item-odd {
            transform: rotate(-2deg);
        }

        .menu-item.menu-item-even {
            transform: rotate(2deg);
        }

        /* Effet de hover amélioré et plus stable */
        .menu-item:hover {
            /* Utiliser translateY au lieu de rotate pour plus de stabilité */
            transform: translateY(-10px) !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
            /* Placer au-dessus des autres éléments pendant le hover */
            z-index: 3 !important;
        }

        /* S'assurer que le conteneur d'image ne coupe pas le contenu */
        .menu-item-image {
            overflow: hidden;
            position: relative;
            z-index: 1;
        }

        /* Optimiser les animations d'image */
        .menu-item-image img {
            transition: transform 0.5s ease;
            transform: translateZ(0); /* Force l'accélération GPU */
            backface-visibility: hidden;
        }

        .menu-item:hover .menu-item-image img {
            transform: scale(1.1);
        }

        /* Garantir que le contenu reste visible */
        .menu-item-content {
            position: relative;
            z-index: 2;
            background-color: var(--beige); /* Assurer un fond opaque */
        }

        /* S'assurer que la section menu n'a pas d'overflow hidden */
        .menu-section {
            overflow: visible !important;
            position: relative;
            z-index: 1;
        }

        .menu-items {
            position: relative;
            z-index: 1;
        }
    `;
    
    document.head.appendChild(styleElement);
    
    // Sélectionner tous les éléments de menu
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        // Supprimer les styles inline qui pourraient causer des problèmes
        if (item.style.transform && item.style.transform.includes('rotate')) {
            item.style.transform = "";
        }
        
        // Ajouter des gestionnaires d'événements de souris
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = "3";
        });
        
        item.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.style.zIndex = "1";
            }, 300); // Attendre que la transition soit terminée
        });
    });
    
    console.log("Correctif de hover appliqué avec succès");
}

// Initialiser le correctif de hover lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Attendre un peu pour s'assurer que tout est chargé
    setTimeout(fixMenuHoverIssue, 500);
    
    // Réappliquer le correctif lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        fixMenuHoverIssue();
    });
});