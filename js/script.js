/**
 * SunClean Solar Manufacturing Website
 * Main JavaScript File
 */

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initFormValidation();
    initScrollAnimations();
    setActiveNavLink();
    
    console.log('SunClean website loaded successfully.');
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Change icon based on state
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close mobile menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                // Reset icon to bars
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/**
 * Contact Form Validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Form validation on submit
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        
        // Reset previous error states
        clearErrors();
        
        // Validation flags
        let isValid = true;
        
        // Name validation
        if (!name.value.trim()) {
            showError(name, 'Please enter your name');
            isValid = false;
        }
        
        // Email validation
        if (!email.value.trim()) {
            showError(email, 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Phone validation (optional but if provided, validate)
        if (phone.value.trim() && !isValidPhone(phone.value)) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Message validation
        if (!message.value.trim()) {
            showError(message, 'Please enter your message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }
        
        // If form is valid, simulate submission
        if (isValid) {
            submitForm();
        }
    });
    
    // Real-time validation for each field
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Clear error on input
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
}

/**
 * Validate individual form field
 */
function validateField(field) {
    const value = field.value.trim();
    let error = '';
    
    switch(field.id) {
        case 'name':
            if (!value) error = 'Please enter your name';
            break;
        case 'email':
            if (!value) {
                error = 'Please enter your email address';
            } else if (!isValidEmail(value)) {
                error = 'Please enter a valid email address';
            }
            break;
        case 'phone':
            if (value && !isValidPhone(value)) {
                error = 'Please enter a valid phone number';
            }
            break;
        case 'message':
            if (!value) {
                error = 'Please enter your message';
            } else if (value.length < 10) {
                error = 'Message must be at least 10 characters';
            }
            break;
    }
    
    if (error) {
        showError(field, error);
        return false;
    } else {
        clearError(field);
        return true;
    }
}

/**
 * Show error for form field
 */
function showError(field, message) {
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        field.style.borderColor = '#e74c3c';
    }
}

/**
 * Clear error for form field
 */
function clearError(field) {
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.style.display = 'none';
        field.style.borderColor = '#e1e5ee';
    }
}

/**
 * Clear all form errors
 */
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
    
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    formInputs.forEach(input => {
        input.style.borderColor = '#e1e5ee';
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
function isValidPhone(phone) {
    // Allow various phone formats with optional country code
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Simulate form submission
 */
function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call with timeout
    setTimeout(function() {
        // Show success message
        if (successMessage) {
            successMessage.style.display = 'block';
        }
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    }, 1500);
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    // Use Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const animateElements = document.querySelectorAll('.card, .tech-feature, .advantage-card, .application-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Utility function to format phone number
 */
function formatPhoneNumber(phone) {
    // Format as per Indian phone numbers
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return phone;
}