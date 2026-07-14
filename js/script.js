// =========================================
// SUN CLEAN TECH - FINAL FULL JS (CLEANED)
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // GLOBAL VARIABLES
  // =========================
  let typingInterval = null;
  let currentTypingElement = null;

  // =========================
  // MOBILE NAVBAR TOGGLE
  // =========================
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        navMenu.classList.remove("show");
      }
    });
  }

  // =========================
  // TYPING ANIMATION FUNCTION
  // =========================
  function typeText(element, text, speed = 80, onComplete = null) {
    if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = null;
    }

    if (currentTypingElement && currentTypingElement !== element) {
      currentTypingElement.classList.remove("typing-cursor");
    }

    if (!element) return;

    element.textContent = "";
    element.classList.add("typing-cursor");
    currentTypingElement = element;

    let i = 0;
    const fullText = text || "";

    typingInterval = setInterval(() => {
      if (i < fullText.length) {
        element.textContent = fullText.substring(0, i + 1);
        i++;
      } else {
        clearInterval(typingInterval);
        typingInterval = null;

        // cursor visible rahega
        // element.classList.remove("typing-cursor");

        if (onComplete && typeof onComplete === "function") {
          onComplete();
        }
      }
    }, speed);
  }

  // =========================
  // HERO SLIDER (HOME PAGE) - OPTIONAL
  // =========================
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
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
  // PRODUCT SLIDER WITH TYPING ANIMATION
  // =========================

  const heroTitle = document.getElementById("heroTitle");
  const productSlides = document.querySelectorAll(".product-slide");
  const productDots = document.querySelectorAll(".p-dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  // Only product titles - heroTitles REMOVED
  const productTitles = [
    // "Increase Energy Generation. Reduce Cleaning Costs",
    // "Automate Vegetation Management Across Large Solar Parks",
    // "24×7 Intelligent Monitoring for Critical Solar Assets",
    // "Identify Hidden Faults Before They Affect Plant Performance",
    // "Transform Solar Inspections Through Aerial Intelligence",
    // "Precision Environmental Data for Smarter Solar Operations",
    "Solar Cleaning Robots",
    "Grass Cutter Robots",
    "Security Robots",
    "Thermography Drones",
    "Inspection Drones",
    "Weather Monitoring System",
  ];

  let currentProduct = 0;
  let productInterval;

  function showProductSlide(index) {
    if (!productSlides.length) return;

    productSlides.forEach((slide) => slide.classList.remove("active"));
    productDots.forEach((dot) => dot.classList.remove("active"));

    if (productSlides[index]) productSlides[index].classList.add("active");
    if (productDots[index]) productDots[index].classList.add("active");

    // Typing animation on hero title
    if (heroTitle && productTitles[index]) {
      heroTitle.textContent = "";
      typeText(heroTitle, productTitles[index], 80);
    }
  }

  function nextProductSlide() {
    currentProduct = (currentProduct + 1) % productSlides.length;
    showProductSlide(currentProduct);
  }

  function prevProductSlide() {
    currentProduct =
      (currentProduct - 1 + productSlides.length) % productSlides.length;
    showProductSlide(currentProduct);
  }

  function startProductSlider() {
    if (productInterval) clearInterval(productInterval);
    productInterval = setInterval(nextProductSlide, 7000);
  }

  function resetProductSlider() {
    if (productInterval) clearInterval(productInterval);
    startProductSlider();
  }

  if (productSlides.length) {
    showProductSlide(currentProduct);
    startProductSlider();

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextProductSlide();
        resetProductSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevProductSlide();
        resetProductSlider();
      });
    }

    productDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentProduct = index;
        showProductSlide(index);
        resetProductSlider();
      });
    });
  }

  // =========================
  // HEADER SCROLL EFFECT
  // =========================
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
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

      const annualManual = manual * 12;
      const optimization = annualManual * 0.35 + plant * 100000 * (loss / 100);
      const impactPercent = Math.min(25, (loss * 2 + freq) / 2);

      if (annualManualCost)
        annualManualCost.textContent = formatINR(annualManual);
      if (optimizationValue)
        optimizationValue.textContent = formatINR(Math.round(optimization));

      if (businessImpact) {
        if (impactPercent < 8) {
          businessImpact.textContent = "Moderate optimization opportunity";
        } else if (impactPercent < 15) {
          businessImpact.textContent =
            "Strong operational improvement potential";
        } else {
          businessImpact.textContent =
            "High ROI and strong business impact potential";
        }
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

      const inputs = contactForm.querySelectorAll("input, textarea, select");
      let isValid = true;

      inputs.forEach((field) => {
        if (field.hasAttribute("required") && !field.value.trim()) {
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
  // SCROLL REVEAL EFFECT
  // =========================
  const revealElements = document.querySelectorAll(
    ".info-card, .glass-card, .mini-card, .product-card, .profile-card, .timeline-item, .contact-info-item, .result-card",
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
