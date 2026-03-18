// // /**
// //  * SunClean Solar Manufacturing Website
// //  * Main JavaScript File
// //  */

// // // DOM Ready Function
// // document.addEventListener('DOMContentLoaded', function() {
// //     // Initialize all components
// //     initMobileMenu();
// //     initFormValidation();
// //     initScrollAnimations();
// //     setActiveNavLink();
    
// //     console.log('SunClean website loaded successfully.');
// // });

// // /**
// //  * Mobile Menu Toggle
// //  */
// // function initMobileMenu() {
// //     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// //     const navLinks = document.querySelector('.nav-links');
    
// //     if (mobileMenuBtn && navLinks) {
// //         mobileMenuBtn.addEventListener('click', function() {
// //             navLinks.classList.toggle('active');
// //             // Change icon based on state
// //             const icon = mobileMenuBtn.querySelector('i');
// //             if (icon) {
// //                 if (navLinks.classList.contains('active')) {
// //                     icon.classList.remove('fa-bars');
// //                     icon.classList.add('fa-times');
// //                 } else {
// //                     icon.classList.remove('fa-times');
// //                     icon.classList.add('fa-bars');
// //                 }
// //             }
// //         });
        
// //         // Close mobile menu when clicking on a link
// //         const navItems = document.querySelectorAll('.nav-links a');
// //         navItems.forEach(item => {
// //             item.addEventListener('click', function() {
// //                 navLinks.classList.remove('active');
// //                 // Reset icon to bars
// //                 const icon = mobileMenuBtn.querySelector('i');
// //                 if (icon) {
// //                     icon.classList.remove('fa-times');
// //                     icon.classList.add('fa-bars');
// //                 }
// //             });
// //         });
// //     }
// // }

// // /**
// //  * Contact Form Validation
// //  */
// // function initFormValidation() {
// //     const contactForm = document.getElementById('contactForm');
    
// //     if (!contactForm) return;
    
// //     // Form validation on submit
// //     contactForm.addEventListener('submit', function(e) {
// //         e.preventDefault();
        
// //         // Get form elements
// //         const name = document.getElementById('name');
// //         const email = document.getElementById('email');
// //         const phone = document.getElementById('phone');
// //         const message = document.getElementById('message');
        
// //         // Reset previous error states
// //         clearErrors();
        
// //         // Validation flags
// //         let isValid = true;
        
// //         // Name validation
// //         if (!name.value.trim()) {
// //             showError(name, 'Please enter your name');
// //             isValid = false;
// //         }
        
// //         // Email validation
// //         if (!email.value.trim()) {
// //             showError(email, 'Please enter your email address');
// //             isValid = false;
// //         } else if (!isValidEmail(email.value)) {
// //             showError(email, 'Please enter a valid email address');
// //             isValid = false;
// //         }
        
// //         // Phone validation (optional but if provided, validate)
// //         if (phone.value.trim() && !isValidPhone(phone.value)) {
// //             showError(phone, 'Please enter a valid phone number');
// //             isValid = false;
// //         }
        
// //         // Message validation
// //         if (!message.value.trim()) {
// //             showError(message, 'Please enter your message');
// //             isValid = false;
// //         } else if (message.value.trim().length < 10) {
// //             showError(message, 'Message must be at least 10 characters');
// //             isValid = false;
// //         }
        
// //         // If form is valid, simulate submission
// //         if (isValid) {
// //             submitForm();
// //         }
// //     });
    
// //     // Real-time validation for each field
// //     const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
// //     formInputs.forEach(input => {
// //         input.addEventListener('blur', function() {
// //             validateField(this);
// //         });
        
// //         // Clear error on input
// //         input.addEventListener('input', function() {
// //             clearError(this);
// //         });
// //     });
// // }

// // /**
// //  * Validate individual form field
// //  */
// // function validateField(field) {
// //     const value = field.value.trim();
// //     let error = '';
    
// //     switch(field.id) {
// //         case 'name':
// //             if (!value) error = 'Please enter your name';
// //             break;
// //         case 'email':
// //             if (!value) {
// //                 error = 'Please enter your email address';
// //             } else if (!isValidEmail(value)) {
// //                 error = 'Please enter a valid email address';
// //             }
// //             break;
// //         case 'phone':
// //             if (value && !isValidPhone(value)) {
// //                 error = 'Please enter a valid phone number';
// //             }
// //             break;
// //         case 'message':
// //             if (!value) {
// //                 error = 'Please enter your message';
// //             } else if (value.length < 10) {
// //                 error = 'Message must be at least 10 characters';
// //             }
// //             break;
// //     }
    
// //     if (error) {
// //         showError(field, error);
// //         return false;
// //     } else {
// //         clearError(field);
// //         return true;
// //     }
// // }

// // /**
// //  * Show error for form field
// //  */
// // function showError(field, message) {
// //     const errorElement = field.nextElementSibling;
// //     if (errorElement && errorElement.classList.contains('error-message')) {
// //         errorElement.textContent = message;
// //         errorElement.style.display = 'block';
// //         field.style.borderColor = '#e74c3c';
// //     }
// // }

// // /**
// //  * Clear error for form field
// //  */
// // function clearError(field) {
// //     const errorElement = field.nextElementSibling;
// //     if (errorElement && errorElement.classList.contains('error-message')) {
// //         errorElement.style.display = 'none';
// //         field.style.borderColor = '#e1e5ee';
// //     }
// // }

// // /**
// //  * Clear all form errors
// //  */
// // function clearErrors() {
// //     const errorMessages = document.querySelectorAll('.error-message');
// //     errorMessages.forEach(error => {
// //         error.style.display = 'none';
// //     });
    
// //     const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
// //     formInputs.forEach(input => {
// //         input.style.borderColor = '#e1e5ee';
// //     });
// // }

// // /**
// //  * Validate email format
// //  */
// // function isValidEmail(email) {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(email);
// // }

// // /**
// //  * Validate phone number format
// //  */
// // function isValidPhone(phone) {
// //     // Allow various phone formats with optional country code
// //     const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
// //     return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
// // }

// // /**
// //  * Simulate form submission
// //  */
// // function submitForm() {
// //     const form = document.getElementById('contactForm');
// //     const submitBtn = form.querySelector('button[type="submit"]');
// //     const successMessage = document.getElementById('successMessage');
    
// //     // Show loading state
// //     const originalText = submitBtn.textContent;
// //     submitBtn.textContent = 'Sending...';
// //     submitBtn.disabled = true;
    
// //     // Simulate API call with timeout
// //     setTimeout(function() {
// //         // Show success message
// //         if (successMessage) {
// //             successMessage.style.display = 'block';
// //         }
        
// //         // Reset button
// //         submitBtn.textContent = originalText;
// //         submitBtn.disabled = false;
        
// //         // Reset form
// //         form.reset();
        
// //         // Hide success message after 5 seconds
// //         setTimeout(function() {
// //             if (successMessage) {
// //                 successMessage.style.display = 'none';
// //             }
// //         }, 5000);
// //     }, 1500);
// // }

// // /**
// //  * Initialize scroll animations
// //  */
// // function initScrollAnimations() {
// //     // Use Intersection Observer for scroll animations
// //     const observerOptions = {
// //         root: null,
// //         rootMargin: '0px',
// //         threshold: 0.1
// //     };
    
// //     const observer = new IntersectionObserver(function(entries) {
// //         entries.forEach(entry => {
// //             if (entry.isIntersecting) {
// //                 entry.target.classList.add('animate-in');
// //             }
// //         });
// //     }, observerOptions);
    
// //     // Observe elements to animate
// //     const animateElements = document.querySelectorAll('.card, .tech-feature, .advantage-card, .application-card');
// //     animateElements.forEach(element => {
// //         observer.observe(element);
// //     });
// // }

// // /**
// //  * Set active navigation link based on current page
// //  */
// // function setActiveNavLink() {
// //     const currentPage = window.location.pathname.split('/').pop() || 'index.html';
// //     const navLinks = document.querySelectorAll('.nav-links a');
    
// //     navLinks.forEach(link => {
// //         const linkPage = link.getAttribute('href');
// //         if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
// //             link.classList.add('active');
// //         } else {
// //             link.classList.remove('active');
// //         }
// //     });
// // }

// // /**
// //  * Utility function to format phone number
// //  */
// // function formatPhoneNumber(phone) {
// //     // Format as per Indian phone numbers
// //     const cleaned = phone.replace(/\D/g, '');
// //     if (cleaned.length === 10) {
// //         return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
// //     }
// //     return phone;
// // }





// // ===============================
// // NAVBAR MOBILE TOGGLE
// // ===============================
// const menuBtn = document.querySelector(".mobile-menu-btn");
// const navLinks = document.querySelector(".nav-links");

// if (menuBtn) {
//   menuBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });
// }

// // ===============================
// // HERO SLIDER (HOME PAGE)
// // ===============================
// const slides = document.querySelectorAll(".hero-slide");
// const dots = document.querySelectorAll(".slider-dot");
// const heroTitle = document.getElementById("heroTitle");

// const heroTitles = [
//   "Next-Generation Solar Panel Cleaning Robots for Maximum Energy Output",
//   "Maximize Solar Output. Minimize Operational Effort",
//   "Intelligent Robotic Cleaning for the Next Era of Solar",
//   "Turn Cleaning into Measurable ROI"
// ];

// let currentSlide = 0;

// function showSlide(index) {
//   if (!slides.length) return;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   slides[index].classList.add("active");

//   if (dots[index]) {
//     dots[index].classList.add("active");
//   }

//   if (heroTitle) {
//     heroTitle.textContent = heroTitles[index];
//   }
// }

// function nextSlide() {
//   if (!slides.length) return;

//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// // dot click
// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentSlide = index;
//     showSlide(index);
//   });
// });

// // auto slide
// setInterval(nextSlide, 5000);

// // ===============================
// // YEAR AUTO UPDATE
// // ===============================
// const year = document.getElementById("currentYear");
// if (year) {
//   year.textContent = new Date().getFullYear();
// }














// =========================================
// SUN CLEAN TECH - FINAL FULL JS
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // MOBILE NAVBAR TOGGLE
  // =========================
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // close nav on link click (mobile)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });

    // close if clicked outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        navMenu.classList.remove("show");
      }
    });
  }

  // =========================
  // HERO SLIDER (HOME PAGE)
  // =========================
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");
  const heroTitle = document.getElementById("heroTitle");

  const heroTitles = [
    "Next-Generation Solar Panel Cleaning Robots for Maximum Energy Output",
    "Maximize Solar Output. Minimize Operational Effort",
    "Intelligent Robotic Cleaning for the Next Era of Solar",
    "Turn Cleaning into Measurable ROI"
  ];

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");

    if (dots[index]) {
      dots[index].classList.add("active");
    }

    if (heroTitle && heroTitles[index]) {
      heroTitle.textContent = heroTitles[index];
    }
  }

  function nextSlide() {
    if (!slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    if (slides.length > 1) {
      sliderInterval = setInterval(nextSlide, 5000);
    }
  }

  function resetSlider() {
    clearInterval(sliderInterval);
    startSlider();
  }

  if (slides.length) {
    showSlide(currentSlide);
    startSlider();

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetSlider();
      });
    });
  }

  // =========================
  // FOOTER YEAR AUTO UPDATE
  // =========================
  const yearSpans = document.querySelectorAll("#currentYear");
  if (yearSpans.length) {
    yearSpans.forEach((year) => {
      year.textContent = new Date().getFullYear();
    });
  }

  // =========================
  // ROI CALCULATOR
  // =========================
  const calculateBtn = document.getElementById("calculateROI");
  const plantSize = document.getElementById("plantSize");
  const manualCost = document.getElementById("manualCost");
  const cleaningFreq = document.getElementById("cleaningFreq");
  const yieldLoss = document.getElementById("yieldLoss");

  const annualManualCost = document.getElementById("annualManualCost");
  const optimizationValue = document.getElementById("optimizationValue");
  const businessImpact = document.getElementById("businessImpact");

  function formatINR(value) {
    return "₹ " + Number(value).toLocaleString("en-IN");
  }

  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      const plant = parseFloat(plantSize?.value) || 0;
      const manual = parseFloat(manualCost?.value) || 0;
      const freq = parseFloat(cleaningFreq?.value) || 0;
      const loss = parseFloat(yieldLoss?.value) || 0;

      if (!plant || !manual || !freq || !loss) {
        alert("Please fill all ROI calculator fields properly.");
        return;
      }

      // simple estimate logic
      const annualManual = manual * 12;
      const optimization = annualManual * 0.35 + (plant * 100000 * (loss / 100));
      const impactPercent = Math.min(25, (loss * 2 + freq) / 2);

      annualManualCost.textContent = formatINR(annualManual);
      optimizationValue.textContent = formatINR(Math.round(optimization));

      if (impactPercent < 8) {
        businessImpact.textContent = "Moderate optimization opportunity";
      } else if (impactPercent < 15) {
        businessImpact.textContent = "Strong operational improvement potential";
      } else {
        businessImpact.textContent = "High ROI and strong business impact potential";
      }
    });
  }

  // =========================
  // CONTACT FORM HANDLER
  // =========================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = contactForm.querySelectorAll("input, textarea");
      let isValid = true;

      inputs.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "red";
        } else {
          field.style.borderColor = "#e5e7eb";
        }
      });

      if (!isValid) {
        alert("Please fill all required fields.");
        return;
      }

      alert("Thank you! Your inquiry has been submitted successfully.");
      contactForm.reset();
    });
  }

  // =========================
  // SIMPLE SCROLL REVEAL EFFECT
  // =========================
  const revealElements = document.querySelectorAll(
    ".info-card, .glass-card, .mini-card, .product-card, .profile-card, .timeline-item, .contact-info-item, .result-card"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});