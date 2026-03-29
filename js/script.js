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
    "Turn Cleaning into Measurable ROI"
  ];

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (slides[index]) slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    if (heroTitle && heroTitles[index]) heroTitle.textContent = heroTitles[index];
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
      const optimization = annualManual * 0.35 + (plant * 100000 * (loss / 100));
      const impactPercent = Math.min(25, (loss * 2 + freq) / 2);

      if (annualManualCost) annualManualCost.textContent = formatINR(annualManual);
      if (optimizationValue) optimizationValue.textContent = formatINR(Math.round(optimization));

      if (businessImpact) {
        if (impactPercent < 8) {
          businessImpact.textContent = "Moderate optimization opportunity";
        } else if (impactPercent < 15) {
          businessImpact.textContent = "Strong operational improvement potential";
        } else {
          businessImpact.textContent = "High ROI and strong business impact potential";
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

  // =========================================
  // PRODUCT DETAIL PAGE - DYNAMIC DATA
  // =========================================
  const productDatabase = {
    v1: {
      title: "SunClean V1",
      badge: "Manual Support Solution",
      subtitle: "Manual Cleaning Support System",
      description:
        "SunClean V1 is an entry-level solar cleaning support solution designed for small solar plants, pilot deployments, and operations where cost-effective cleaning support is needed.",
      images: [
        "assets/images/sunclean9.png",
        "assets/images/sunclean10.jpeg",
        "assets/images/sunclean11.png",
        "assets/images/sunclean12.jpeg"
      ],
      highlights: [
        "Lightweight Operation",
        "Easy to Handle",
        "Cost Effective",
        "Small Plant Ready"
      ],
      quickSpecs: [
        ["Automation", "Manual"],
        ["Best For", "Small Plants"],
        ["Cleaning Type", "Manual Support"],
        ["Operation", "Simple Handling"]
      ],
      featuresIntro:
        "A practical and affordable solution for solar cleaning support where simplicity and ease of use matter.",
      features: [
        {
          icon: "fa-hand",
          title: "Manual Control",
          text: "Simple manual support operation for easy deployment and handling."
        },
        {
          icon: "fa-feather",
          title: "Lightweight Build",
          text: "Designed for easy movement and practical field use."
        },
        {
          icon: "fa-wallet",
          title: "Affordable Setup",
          text: "Ideal for projects with lower initial automation requirements."
        },
        {
          icon: "fa-solar-panel",
          title: "Small Site Friendly",
          text: "Best suited for compact or pilot solar installations."
        }
      ],
      specs: [
        ["Model", "SunClean V1"],
        ["Automation Level", "Manual"],
        ["Movement Type", "Manual Handling"],
        ["Cleaning Method", "Basic Dry Support"],
        ["Application", "Small Plants / Pilot Sites"],
        ["Maintenance", "Very Low"],
        ["Human Dependency", "High"],
        ["Performance", "Basic"]
      ],
      benefits: [
        "Easy to deploy and operate",
        "Low initial cost",
        "Useful for pilot projects",
        "Supports basic cleaning needs",
        "Simple maintenance requirements",
        "Practical for small-scale operations"
      ],
      applicationsHeading: "Where SunClean V1 Works Best",
      applicationsIntro:
        "An ideal fit for smaller solar installations and projects in the early deployment stage.",
      applications: [
        {
          icon: "fa-solar-panel",
          title: "Small Solar Plants",
          text: "Suitable for compact solar projects requiring practical cleaning support."
        },
        {
          icon: "fa-flask",
          title: "Pilot Projects",
          text: "Good for testing and early-stage deployment environments."
        },
        {
          icon: "fa-school",
          title: "Institutional Sites",
          text: "Useful for schools, campuses, and smaller facility rooftops."
        }
      ],
      workingHeading: "How SunClean V1 Operates",
      workingIntro:
        "A simple cleaning workflow built around manual support and easy handling.",
      steps: [
        "Operator positions the unit for cleaning support",
        "Manual movement begins across target panel sections",
        "Surface cleaning is performed with controlled support",
        "Cleaning cycle is repeated based on requirement"
      ],
      ctaTitle: "Need a Simple Solar Cleaning Solution?",
      ctaText:
        "Talk to our team to see if SunClean V1 is the right fit for your plant."
    },

    v2: {
      title: "SunClean V2",
      badge: "Semi-Automatic Solution",
      subtitle: "Semi-Automatic Cleaning Robot",
      description:
        "SunClean V2 improves cleaning speed and consistency while reducing heavy manual effort. It is designed for medium-scale solar operations seeking better repeatability and operational efficiency.",
      images: [
        "assets/images/sunclean10.jpeg",
        "assets/images/sunclean9.png",
        "assets/images/sunclean11.png",
        "assets/images/sunclean12.jpeg"
      ],
      highlights: [
        "Semi-Automatic Operation",
        "Improved Cleaning Speed",
        "Reduced Manual Labour",
        "Medium Plant Ready"
      ],
      quickSpecs: [
        ["Automation", "Semi-Automatic"],
        ["Best For", "Medium Plants"],
        ["Cleaning Type", "Assisted Robotic"],
        ["Operation", "Repeatable Cleaning"]
      ],
      featuresIntro:
        "A stronger step toward automation with better consistency and improved field efficiency.",
      features: [
        {
          icon: "fa-gears",
          title: "Semi-Automatic Workflow",
          text: "Improves cleaning consistency compared to fully manual processes."
        },
        {
          icon: "fa-gauge-high",
          title: "Better Speed",
          text: "Helps complete cleaning operations faster and more efficiently."
        },
        {
          icon: "fa-users-slash",
          title: "Reduced Labour Need",
          text: "Cuts down dependence on repetitive heavy manual work."
        },
        {
          icon: "fa-repeat",
          title: "Consistent Output",
          text: "Supports more repeatable cleaning cycles across panel rows."
        }
      ],
      specs: [
        ["Model", "SunClean V2"],
        ["Automation Level", "Semi-Automatic"],
        ["Movement Type", "Assisted Movement"],
        ["Cleaning Method", "Semi-Automated Cleaning"],
        ["Application", "Medium Scale Plants"],
        ["Maintenance", "Low"],
        ["Human Dependency", "Moderate"],
        ["Performance", "Improved"]
      ],
      benefits: [
        "Faster cleaning than manual systems",
        "Improved repeatability",
        "Lower labour dependency",
        "Better operational consistency",
        "Practical for medium-scale plants",
        "Balanced cost vs performance"
      ],
      applicationsHeading: "Where SunClean V2 Works Best",
      applicationsIntro:
        "Designed for plants looking to move from manual processes toward structured automation.",
      applications: [
        {
          icon: "fa-industry",
          title: "Medium Solar Plants",
          text: "Suitable for medium-size solar farms and commercial installations."
        },
        {
          icon: "fa-building",
          title: "Commercial Sites",
          text: "Useful where regular cleaning and reliability are required."
        },
        {
          icon: "fa-sun",
          title: "Dust-Prone Areas",
          text: "Helps improve cleaning performance in dust-heavy environments."
        }
      ],
      workingHeading: "How SunClean V2 Operates",
      workingIntro:
        "A semi-automated process designed for better repeatability and speed.",
      steps: [
        "System is positioned and prepared for operation",
        "Semi-automatic cleaning cycle begins",
        "Panels are cleaned with improved consistency",
        "Cleaning is repeated as per operational schedule"
      ],
      ctaTitle: "Looking for Better Cleaning Efficiency?",
      ctaText:
        "Let our team help you understand if SunClean V2 fits your plant requirements."
    },

    v3: {
      title: "SunClean V3",
      badge: "Fully Automatic Solution",
      subtitle: "Fully Automatic Robotic System",
      description:
        "SunClean V3 is a fully automated robotic cleaning solution designed for performance-focused solar plants where high cleaning coverage, reduced downtime, and low manual dependency are critical.",
      images: [
        "assets/images/sunclean11.png",
        "assets/images/sunclean10.jpeg",
        "assets/images/sunclean12.jpeg",
        "assets/images/sunclean9.png"
      ],
      highlights: [
        "Fully Automatic",
        "High Coverage",
        "Low Supervision",
        "Performance Driven"
      ],
      quickSpecs: [
        ["Automation", "Automatic"],
        ["Best For", "Large Plants"],
        ["Cleaning Type", "Robotic Cleaning"],
        ["Operation", "Autonomous"]
      ],
      featuresIntro:
        "Built for plants that need automated cleaning support with stronger operational performance.",
      features: [
        {
          icon: "fa-robot",
          title: "Autonomous Operation",
          text: "Runs with minimal supervision and reduced manual effort."
        },
        {
          icon: "fa-expand",
          title: "High Coverage",
          text: "Designed for broader panel cleaning with consistent results."
        },
        {
          icon: "fa-clock",
          title: "Reduced Downtime",
          text: "Supports better cleaning frequency with lower operational interruption."
        },
        {
          icon: "fa-chart-line",
          title: "Performance Support",
          text: "Helps maintain cleaner panels for better plant output."
        }
      ],
      specs: [
        ["Model", "SunClean V3"],
        ["Automation Level", "Automatic"],
        ["Movement Type", "Autonomous"],
        ["Cleaning Method", "Robotic Dry / Low Water"],
        ["Application", "Large Solar Plants"],
        ["Maintenance", "Low"],
        ["Human Dependency", "Low"],
        ["Performance", "High"]
      ],
      benefits: [
        "Reduced manual supervision",
        "Higher cleaning consistency",
        "Good fit for large plants",
        "Supports operational uptime",
        "Improved automation readiness",
        "Better performance support"
      ],
      applicationsHeading: "Where SunClean V3 Works Best",
      applicationsIntro:
        "An ideal solution for larger plants where repeatability and low supervision are important.",
      applications: [
        {
          icon: "fa-solar-panel",
          title: "Large Solar Farms",
          text: "Well-suited for plants with larger cleaning coverage needs."
        },
        {
          icon: "fa-bolt",
          title: "Performance Plants",
          text: "Designed for plants focused on uptime and energy yield support."
        },
        {
          icon: "fa-wind",
          title: "Harsh Environments",
          text: "Useful in field conditions with repeated dust accumulation."
        }
      ],
      workingHeading: "How SunClean V3 Operates",
      workingIntro:
        "A robotic process built for autonomous and repeatable cleaning.",
      steps: [
        "System is activated for programmed cleaning",
        "Robot moves across the cleaning route autonomously",
        "Surface-level dust and buildup are removed",
        "Cleaning cycles repeat with minimal supervision"
      ],
      ctaTitle: "Need Full Automation for Cleaning?",
      ctaText:
        "Connect with our experts to evaluate SunClean V3 for your plant."
    },

    v4: {
      title: "SunClean V4",
      badge: "Track-Based Robotic Solution",
      subtitle: "Robotic Vehicle on Track",
      description:
        "SunClean V4 is an advanced track-based robotic cleaning platform built for large utility-scale solar plants requiring repeatable, high-frequency, and efficient cleaning operations.",
      images: [
        "assets/images/sunclean12.jpeg",
        "assets/images/sunclean11.png",
        "assets/images/sunclean10.jpeg",
        "assets/images/sunclean9.png"
      ],
      highlights: [
        "Track-Based Robot",
        "High Frequency Cleaning",
        "Large Plant Ready",
        "Very Low Human Effort"
      ],
      quickSpecs: [
        ["Automation", "Fully Automatic"],
        ["Best For", "Utility Scale"],
        ["Cleaning Type", "Track-Based Robotic"],
        ["Operation", "Repeatable High Frequency"]
      ],
      featuresIntro:
        "A robust cleaning platform for large solar environments demanding repeatability and scale.",
      features: [
        {
          icon: "fa-route",
          title: "Track-Based Movement",
          text: "Moves reliably across structured cleaning routes."
        },
        {
          icon: "fa-arrows-rotate",
          title: "Repeatable Cleaning",
          text: "Supports high-frequency cleaning with operational consistency."
        },
        {
          icon: "fa-industry",
          title: "Utility Scale Ready",
          text: "Designed specifically for large plant environments."
        },
        {
          icon: "fa-user-minus",
          title: "Low Human Dependency",
          text: "Minimizes repetitive manual involvement in daily cleaning."
        }
      ],
      specs: [
        ["Model", "SunClean V4"],
        ["Automation Level", "Fully Automatic"],
        ["Movement Type", "Track-Based"],
        ["Cleaning Method", "Dry / Low Water Robotic"],
        ["Application", "Utility Scale Solar Plants"],
        ["Maintenance", "Low"],
        ["Human Dependency", "Very Low"],
        ["Performance", "Very High"]
      ],
      benefits: [
        "Built for utility-scale operations",
        "Supports repeat cleaning schedules",
        "Lower operational dependency",
        "Improved cleaning reliability",
        "High-frequency use support",
        "Better large-plant maintenance efficiency"
      ],
      applicationsHeading: "Where SunClean V4 Works Best",
      applicationsIntro:
        "Best suited for large solar sites requiring structured and frequent cleaning operations.",
      applications: [
        {
          icon: "fa-solar-panel",
          title: "Utility Scale Plants",
          text: "Optimized for very large solar farm deployments."
        },
        {
          icon: "fa-road",
          title: "Track Infrastructure Sites",
          text: "Best for installations designed for guided robotic operation."
        },
        {
          icon: "fa-chart-column",
          title: "High Output Plants",
          text: "Supports plants where operational efficiency is a top priority."
        }
      ],
      workingHeading: "How SunClean V4 Operates",
      workingIntro:
        "A structured robotic workflow built for scale, repeatability, and reliability.",
      steps: [
        "Robot aligns with installed track infrastructure",
        "Automated movement begins across cleaning path",
        "Panels are cleaned through repeatable robotic action",
        "Scheduled cycles continue for long-term maintenance"
      ],
      ctaTitle: "Need a Track-Based Cleaning Robot?",
      ctaText:
        "Talk to our team to explore SunClean V4 deployment for your solar plant."
    },

    v5: {
      title: "SunClean V5",
      badge: "Advanced Autonomous Solution",
      subtitle: "Fully Automatic Dry Cleaning Robot",
      description:
        "SunClean V5 is a next-generation fully automatic dry cleaning robot built for modern utility-scale and high-performance solar plants. It is engineered for intelligent cleaning, minimal human intervention, and reliable long-term operational efficiency.",
      images: [
        "assets/images/sunclean12.jpeg",
        "assets/images/sunclean11.png",
        "assets/images/sunclean10.jpeg",
        "assets/images/sunclean9.png"
      ],
      highlights: [
        "Fully Automatic Cleaning",
        "Dry Cleaning Technology",
        "Smart Operations",
        "Low Maintenance Design"
      ],
      quickSpecs: [
        ["Automation", "Fully Automatic"],
        ["Best For", "Large & Utility Plants"],
        ["Cleaning Type", "Dry Cleaning Robot"],
        ["Operation", "Smart Autonomous"]
      ],
      featuresIntro:
        "A smart robotic cleaning system designed for advanced solar operations where performance, consistency, and automation matter most.",
      features: [
        {
          icon: "fa-robot",
          title: "Autonomous Cleaning",
          text: "Operates with minimal manual intervention for consistent solar panel cleaning."
        },
        {
          icon: "fa-wind",
          title: "Dry Cleaning Technology",
          text: "Designed for dry cleaning support with reduced water dependency."
        },
        {
          icon: "fa-microchip",
          title: "Smart Control System",
          text: "Supports intelligent and efficient robotic cleaning cycles."
        },
        {
          icon: "fa-shield-halved",
          title: "Reliable Long-Term Use",
          text: "Built for durability, operational consistency, and field-ready performance."
        }
      ],
      specs: [
        ["Model", "SunClean V5"],
        ["Automation Level", "Fully Automatic"],
        ["Movement Type", "Autonomous Guided"],
        ["Cleaning Method", "Dry Cleaning Robotic"],
        ["Application", "Large / Utility Scale Plants"],
        ["Maintenance", "Very Low"],
        ["Human Dependency", "Minimal"],
        ["Performance", "Advanced High Efficiency"]
      ],
      benefits: [
        "Reduces repetitive cleaning effort",
        "Supports dry cleaning operations",
        "Improves cleaning consistency",
        "Designed for advanced solar plants",
        "Lower maintenance dependency",
        "Supports long-term operational efficiency"
      ],
      applicationsHeading: "Where SunClean V5 Works Best",
      applicationsIntro:
        "Ideal for modern solar projects where automation, dry cleaning, and high operational efficiency are required.",
      applications: [
        {
          icon: "fa-solar-panel",
          title: "Utility Scale Solar Plants",
          text: "Built for large-scale deployments where cleaning consistency directly impacts performance."
        },
        {
          icon: "fa-sun",
          title: "Dry & Dusty Environments",
          text: "Performs well in environments with regular dust accumulation and limited water availability."
        },
        {
          icon: "fa-bolt",
          title: "High Efficiency Projects",
          text: "Best suited for solar plants focused on uptime, energy yield, and operational optimization."
        }
      ],
      workingHeading: "How SunClean V5 Operates",
      workingIntro:
        "A simplified autonomous robotic workflow designed for efficient and repeatable dry cleaning operations.",
      steps: [
        "Robot is positioned and initialized for the cleaning cycle",
        "Smart autonomous movement begins across the target cleaning route",
        "Dry cleaning mechanism removes dust and surface buildup",
        "System completes repeatable cleaning operations with minimal supervision"
      ],
      ctaTitle: "Need an Advanced Dry Cleaning Robot?",
      ctaText:
        "Talk to our team to explore how SunClean V5 can fit your solar plant operations."
    }
  };

  const isProductDetailPage = window.location.pathname.includes("product-detail.html");
  if (!isProductDetailPage) return;

  const params = new URLSearchParams(window.location.search);
  const productKey = params.get("product") || "v1";
  const product = productDatabase[productKey];

  if (!product) return;

  document.title = `${product.title} | SunClean`;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("productBadge", product.badge);
  setText("productTitle", product.title);
  setText("productSubtitle", product.subtitle);
  setText("productDescription", product.description);
  setText("featuresIntro", product.featuresIntro);
  setText("applicationsHeading", product.applicationsHeading);
  setText("applicationsIntro", product.applicationsIntro);
  setText("workingHeading", product.workingHeading);
  setText("workingIntro", product.workingIntro);
  setText("ctaTitle", product.ctaTitle);
  setText("ctaText", product.ctaText);

  // =========================
  // MAIN PRODUCT IMAGE
  // =========================
  const mainProductImage = document.getElementById("mainProductImage");
  if (mainProductImage && product.images?.length) {
    mainProductImage.src = product.images[0];
    mainProductImage.alt = product.title;
  }

  // =========================
  // THUMBNAILS
  // =========================
  const thumbnailRow = document.getElementById("thumbnailRow");
  if (thumbnailRow && product.images?.length) {
    thumbnailRow.innerHTML = product.images
      .map((img, index) => `
        <img src="${img}" class="thumb ${index === 0 ? "active-thumb" : ""}" alt="${product.title} thumbnail ${index + 1}">
      `)
      .join("");

    const thumbs = thumbnailRow.querySelectorAll(".thumb");
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        mainProductImage.src = thumb.src;
        thumbs.forEach((item) => item.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
      });
    });
  }

  // =========================
  // HIGHLIGHTS
  // =========================
  const productHighlights = document.getElementById("productHighlights");
  if (productHighlights) {
    productHighlights.innerHTML = product.highlights
      .map((item) => `<div><i class="fas fa-circle-check"></i> ${item}</div>`)
      .join("");
  }

  // =========================
  // QUICK SPECS
  // =========================
  const quickSpecBox = document.getElementById("quickSpecBox");
  if (quickSpecBox) {
    quickSpecBox.innerHTML = product.quickSpecs
      .map(([label, value]) => `
        <div class="quick-spec-item">
          <h4>${label}</h4>
          <p>${value}</p>
        </div>
      `)
      .join("");
  }

  // =========================
  // FEATURE CARDS
  // =========================
  const featureCards = document.getElementById("featureCards");
  if (featureCards) {
    featureCards.innerHTML = product.features
      .map((item) => `
        <div class="info-card">
          <i class="fas ${item.icon}"></i>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `)
      .join("");
  }

  // =========================
  // TECH SPECS
  // =========================
  const specList = document.getElementById("specList");
  if (specList) {
    specList.innerHTML = product.specs
      .map(([label, value]) => `
        <div class="spec-row">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `)
      .join("");
  }

  // =========================
  // BENEFITS
  // =========================
  const benefitList = document.getElementById("benefitList");
  if (benefitList) {
    benefitList.innerHTML = product.benefits
      .map((item) => `<div><i class="fas fa-check"></i> ${item}</div>`)
      .join("");
  }

  // =========================
  // APPLICATIONS
  // =========================
  const applicationCards = document.getElementById("applicationCards");
  if (applicationCards) {
    applicationCards.innerHTML = product.applications
      .map((item) => `
        <div class="glass-card">
          <div class="icon-circle"><i class="fas ${item.icon}"></i></div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `)
      .join("");
  }

  // =========================
  // WORKING STEPS
  // =========================
  const workingSteps = document.getElementById("workingSteps");
  if (workingSteps) {
    workingSteps.innerHTML = product.steps
      .map((step, index) => `
        <div class="timeline-item">
          <div class="timeline-number">${index + 1}</div>
          <div class="timeline-content">
            <h3>Step ${index + 1}</h3>
            <p>${step}</p>
          </div>
        </div>
      `)
      .join("");
  }

  // =========================
  // RELATED PRODUCTS (FIXED)
  // =========================
  const relatedProducts = document.getElementById("relatedProducts");
  if (relatedProducts) {
    const related = Object.entries(productDatabase).filter(([key]) => key !== productKey);

    relatedProducts.className = "grid two";

    relatedProducts.innerHTML = related
      .map(([key, item]) => `
        <div class="product-card related-product-card">
          <img src="${item.images[0]}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p class="product-tag">${item.subtitle}</p>
          <a href="product-detail.html?product=${key}" class="btn btn-secondary related-card-btn">View Product</a>
        </div>
      `)
      .join("");
  }
});