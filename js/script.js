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
  // HERO SLIDER (HOME PAGE)
  // =========================
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");
  const heroTitle = document.getElementById("heroTitle");

  const heroTitles = [
    "Next-Generation Solar Panel Cleaning Robots for Maximum Energy Output",
    "Maximize Solar Output. Minimize Operational Effort",
    "Intelligent Robotic Cleaning for the Next Era of Solar",
    "Turn Cleaning into Measurable ROI",
  ];

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    if (heroTitle && heroTitles[index])
      heroTitle.textContent = heroTitles[index];
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
  // SIMPLE SCROLL REVEAL EFFECT
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
