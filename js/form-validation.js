/**
 * Form validation for City Crêpe website
 */

// DOM elements
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Error messages
const errorMessages = {
  required: 'Ce champ est obligatoire',
  email: 'Veuillez entrer une adresse email valide',
  minLength: 'Ce champ doit contenir au moins {min} caractères'
};

// Initialize form validation when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add input event listeners
  if (contactForm) {
    initFormValidation();
  }
});

// Function to initialize form validation
function initFormValidation() {
  // Add input event listeners for real-time validation
  if (nameInput) {
    nameInput.addEventListener('input', function() {
      validateField(this, [
        { type: 'required' },
        { type: 'minLength', min: 2 }
      ]);
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      validateField(this, [
        { type: 'required' },
        { type: 'email' }
      ]);
    });
  }
  
  if (messageInput) {
    messageInput.addEventListener('input', function() {
      validateField(this, [
        { type: 'required' },
        { type: 'minLength', min: 10 }
      ]);
    });
  }
  
  // Add form submission validation
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Prevent form submission
      e.preventDefault();
      
      // Validate all fields
      const nameValid = validateField(nameInput, [
        { type: 'required' },
        { type: 'minLength', min: 2 }
      ]);
      
      const emailValid = validateField(emailInput, [
        { type: 'required' },
        { type: 'email' }
      ]);
      
      const messageValid = validateField(messageInput, [
        { type: 'required' },
        { type: 'minLength', min: 10 }
      ]);
      
      // Submit form if all fields are valid
      if (nameValid && emailValid && messageValid) {
        submitForm(this);
      }
    });
  }
}

// Function to validate a field against specified rules
function validateField(field, rules) {
  if (!field) return false;
  
  // Get field value
  const value = field.value.trim();
  
  // Check each validation rule
  for (const rule of rules) {
    let isValid = true;
    let errorMessage = '';
    
    switch (rule.type) {
      case 'required':
        isValid = value !== '';
        errorMessage = errorMessages.required;
        break;
        
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        errorMessage = errorMessages.email;
        break;
        
      case 'minLength':
        isValid = value.length >= rule.min;
        errorMessage = errorMessages.minLength.replace('{min}', rule.min);
        break;
    }
    
    // If field is invalid, show error message and return false
    if (!isValid) {
      showError(field, errorMessage);
      return false;
    }
  }
  
  // If all rules passed, clear error and return true
  clearError(field);
  return true;
}

// Function to show error message for a field
function showError(field, message) {
  // Remove existing error message if any
  clearError(field);
  
  // Add error class to field
  field.classList.add('error');
  
  // Create error message element
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  
  // Add error message after the field
  field.parentNode.appendChild(errorElement);
  
  // Add animation to error message
  errorElement.style.opacity = '0';
  errorElement.style.transform = 'translateY(-10px)';
  
  // Trigger animation
  setTimeout(() => {
    errorElement.style.transition = 'all 0.3s ease';
    errorElement.style.opacity = '1';
    errorElement.style.transform = 'translateY(0)';
  }, 10);
}

// Function to clear error message for a field
function clearError(field) {
  // Remove error class from field
  field.classList.remove('error');
  
  // Remove error message if exists
  const errorElement = field.parentNode.querySelector('.error-message');
  if (errorElement) {
    // Add fade-out animation
    errorElement.style.opacity = '0';
    errorElement.style.transform = 'translateY(-10px)';
    
    // Remove element after animation
    setTimeout(() => {
      errorElement.remove();
    }, 300);
  }
}

// Function to handle form submission
function submitForm(form) {
  // Get form values
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  
  // Get submit button
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  // Disable form and show loading state
  disableForm(form);
  submitButton.innerHTML = 'Envoi en cours <span class="loading-dots"><span></span><span></span><span></span></span>';
  
  // Simulate form submission (replace with actual AJAX call)
  setTimeout(() => {
    // Here you would typically send the data to a server
    console.log('Form data submitted:', formData);
    
    // Reset form
    form.reset();
    
    // Show success message
    submitButton.innerHTML = 'Envoyé <span class="success-icon">✓</span>';
    
    // Add success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Votre message a été envoyé avec succès!';
    
    // Insert success message before the form
    form.parentNode.insertBefore(successMessage, form);
    
    // Add animation to success message
    successMessage.style.opacity = '0';
    successMessage.style.transform = 'translateY(-10px)';
    
    // Trigger animation
    setTimeout(() => {
      successMessage.style.transition = 'all 0.3s ease';
      successMessage.style.opacity = '1';
      successMessage.style.transform = 'translateY(0)';
    }, 10);
    
    // Enable form after a delay
    setTimeout(() => {
      enableForm(form);
      submitButton.textContent = originalText;
      
      // Remove success message with animation
      successMessage.style.opacity = '0';
      successMessage.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        successMessage.remove();
      }, 300);
    }, 3000);
  }, 1500);
}

// Function to disable form during submission
function disableForm(form) {
  const formElements = form.elements;
  
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = true;
  }
}

// Function to enable form after submission
function enableForm(form) {
  const formElements = form.elements;
  
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = false;
  }
}

// Function to add custom styles for validation
function addValidationStyles() {
  // Create style element
  const style = document.createElement('style');
  
  // Set validation styles
  style.textContent = `
    .form-group input.error,
    .form-group textarea.error {
      border-color: #E63462;
      background-color: rgba(230, 52, 98, 0.05);
    }
    
    .error-message {
      color: #E63462;
      font-size: 0.8rem;
      margin-top: 5px;
      transition: all 0.3s ease;
    }
    
    .success-message {
      color: #4BBFBB;
      background-color: rgba(75, 191, 187, 0.1);
      padding: 10px;
      border-radius: 20px;
      margin-bottom: 20px;
      text-align: center;
      transition: all 0.3s ease;
    }
  `;
  
  // Add style to head
  document.head.appendChild(style);
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addValidationStyles();
});