// // ================================
// // ASHISH SHARMA - PORTFOLIO JS
// // Interactive & Animated Features
// // ================================

// class Portfolio {
//   constructor() {
//     this.init();
//     this.setupEventListeners();
//     this.createParticles();
//     this.startAnimations();
//   }

//   init() {
//     this.navbar = document.getElementById("navbar");
//     this.hamburger = document.getElementById("hamburger");
//     this.navLinks = document.getElementById("navLinks");
//     this.loadingScreen = document.getElementById("loadingScreen");
//     this.roleText = document.getElementById("roleText");
//     this.contactForm = document.getElementById("contactForm");

//     this.roles = [
//       "Full Stack Developer",
//       "React Developer",
//       "UI/UX Designer",
//       "Backend Engineer",
//       "Problem Solver",
//     ];
//     this.currentRole = 0;
//     this.isMenuOpen = false;

//     this.hideLoadingScreen();
//   }

//   setupEventListeners() {
//     // Window events
//     window.addEventListener("scroll", () => this.handleScroll());
//     window.addEventListener("resize", () => this.handleResize());

//     // Navigation
//     this.hamburger?.addEventListener("click", () => this.toggleMobileMenu());

//     // Smooth scrolling
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", (e) => this.smoothScroll(e));
//     });

//     // Contact form
//     this.contactForm?.addEventListener("submit", (e) =>
//       this.handleContactForm(e)
//     );

//     // Close mobile menu when clicking nav links
//     document.querySelectorAll(".nav-link").forEach((link) => {
//       link.addEventListener("click", () => {
//         if (this.isMenuOpen) this.closeMobileMenu();
//       });
//     });
//   }

//   hideLoadingScreen() {
//     setTimeout(() => {
//       this.loadingScreen?.classList.add("hidden");
//       setTimeout(() => {
//         if (this.loadingScreen) this.loadingScreen.style.display = "none";
//       }, 500);
//     }, 1500);
//   }

//   handleScroll() {
//     // Update navbar
//     if (window.scrollY > 50) {
//       this.navbar?.classList.add("scrolled");
//     } else {
//       this.navbar?.classList.remove("scrolled");
//     }

//     // Update active nav link
//     this.updateActiveNavLink();

//     // Animate elements on scroll
//     this.animateOnScroll();
//   }

//   updateActiveNavLink() {
//     const sections = document.querySelectorAll("section[id]");
//     const navLinks = document.querySelectorAll(".nav-link");

//     let current = "";
//     const scrollPos = window.scrollY + 100;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;

//       if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href") === `#${current}`) {
//         link.classList.add("active");
//       }
//     });
//   }

//   toggleMobileMenu() {
//     if (this.isMenuOpen) {
//       this.closeMobileMenu();
//     } else {
//       this.openMobileMenu();
//     }
//   }

//   openMobileMenu() {
//     this.navLinks?.classList.add("show");
//     this.hamburger?.classList.add("active");
//     document.body.style.overflow = "hidden";
//     this.isMenuOpen = true;

//     // Animate hamburger
//     const spans = this.hamburger?.querySelectorAll("span");
//     if (spans) {
//       spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
//       spans[1].style.opacity = "0";
//       spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
//     }
//   }

//   closeMobileMenu() {
//     this.navLinks?.classList.remove("show");
//     this.hamburger?.classList.remove("active");
//     document.body.style.overflow = "";
//     this.isMenuOpen = false;

//     // Reset hamburger
//     const spans = this.hamburger?.querySelectorAll("span");
//     if (spans) {
//       spans[0].style.transform = "";
//       spans[1].style.opacity = "";
//       spans[2].style.transform = "";
//     }
//   }

//   handleResize() {
//     if (window.innerWidth > 768 && this.isMenuOpen) {
//       this.closeMobileMenu();
//     }
//   }

//   smoothScroll(e) {
//     e.preventDefault();
//     const targetId = e.currentTarget.getAttribute("href");
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       const offsetTop = targetSection.offsetTop - 80;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }

//   handleContactForm(e) {
//     e.preventDefault();

//     const button = this.contactForm.querySelector('button[type="submit"]');
//     const originalText = button.innerHTML;

//     // Show loading state
//     button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//     button.disabled = true;

//     // Simulate form submission
//     setTimeout(() => {
//       button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
//       button.style.background = "#10b981";

//       this.contactForm.reset();
//       this.showNotification(
//         "Message sent successfully! I'll get back to you soon.",
//         "success"
//       );

//       setTimeout(() => {
//         button.innerHTML = originalText;
//         button.disabled = false;
//         button.style.background = "";
//       }, 3000);
//     }, 2000);
//   }

//   showNotification(message, type = "success") {
//     const notification = document.createElement("div");
//     notification.style.cssText = `
//             position: fixed;
//             top: 20px;
//             right: 20px;
//             background: ${type === "success" ? "#10b981" : "#ef4444"};
//             color: white;
//             padding: 1rem 1.5rem;
//             border-radius: 0.5rem;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//             z-index: 9999;
//             animation: slideInRight 0.3s ease-out;
//             max-width: 300px;
//             font-family: 'Poppins', sans-serif;
//         `;

//     notification.innerHTML = `
//             <div style="display: flex; align-items: center; gap: 0.5rem;">
//                 <i class="fas fa-${
//                   type === "success" ? "check-circle" : "exclamation-circle"
//                 }"></i>
//                 <span>${message}</span>
//             </div>
//         `;

//     document.body.appendChild(notification);

//     setTimeout(() => {
//       notification.style.animation = "slideOutRight 0.3s ease-out";
//       setTimeout(() => document.body.removeChild(notification), 300);
//     }, 5000);
//   }

//   animateOnScroll() {
//     // Animate counters
//     const counters = document.querySelectorAll("[data-count]");
//     counters.forEach((counter) => {
//       if (
//         this.isInViewport(counter) &&
//         !counter.classList.contains("animated")
//       ) {
//         this.animateCounter(counter);
//         counter.classList.add("animated");
//       }
//     });

//     // Animate skill bars
//     const skillBars = document.querySelectorAll(".skill-progress");
//     skillBars.forEach((bar) => {
//       if (this.isInViewport(bar) && !bar.classList.contains("animated")) {
//         const width = bar.getAttribute("data-width");
//         bar.style.width = width + "%";
//         bar.classList.add("animated");
//       }
//     });
//   }

//   isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return rect.top >= 0 && rect.top <= window.innerHeight;
//   }

//   animateCounter(counter) {
//     const target = parseInt(counter.getAttribute("data-count"));
//     const increment = target / 100;
//     let current = 0;

//     const updateCounter = () => {
//       if (current < target) {
//         current += increment;
//         counter.textContent = Math.floor(current);
//         requestAnimationFrame(updateCounter);
//       } else {
//         counter.textContent = target;
//       }
//     };

//     updateCounter();
//   }

//   createParticles() {
//     const particlesContainer = document.getElementById("particles");
//     if (!particlesContainer) return;

//     for (let i = 0; i < 50; i++) {
//       const particle = document.createElement("div");
//       particle.style.cssText = `
//                 position: absolute;
//                 width: 2px;
//                 height: 2px;
//                 background: rgba(0, 255, 255, 0.5);
//                 border-radius: 50%;
//                 left: ${Math.random() * 100}%;
//                 top: ${Math.random() * 100}%;
//                 animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
//                 animation-delay: ${Math.random() * 2}s;
//             `;
//       particlesContainer.appendChild(particle);
//     }
//   }

//   startAnimations() {
//     // Role changer
//     if (this.roleText) {
//       setInterval(() => {
//         this.roleText.style.opacity = "0";
//         setTimeout(() => {
//           this.currentRole = (this.currentRole + 1) % this.roles.length;
//           this.roleText.textContent = this.roles[this.currentRole];
//           this.roleText.style.opacity = "1";
//         }, 500);
//       }, 3000);
//     }

//     // Add entrance animations
//     setTimeout(() => {
//       const elements = document.querySelectorAll(".hero-text > *");
//       elements.forEach((el, index) => {
//         setTimeout(() => {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         }, index * 200);
//       });
//     }, 200);
//   }
// }

// // Add dynamic styles
// const styles = `
//     <style>
//         @keyframes slideInRight {
//             from { opacity: 0; transform: translateX(100%); }
//             to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes slideOutRight {
//             from { opacity: 1; transform: translateX(0); }
//             to { opacity: 0; transform: translateX(100%); }
//         }

//         .hero-text > * {
//             opacity: 0;
//             transform: translateY(30px);
//             transition: all 0.8s ease;
//         }

//         .btn:disabled {
//             cursor: not-allowed;
//             opacity: 0.7;
//         }

//         .nav-link:focus,
//         .btn:focus,
//         .social-link:focus {
//             outline: 2px solid var(--primary-color);
//             outline-offset: 2px;
//         }
//     </style>
// `;

// document.head.insertAdjacentHTML("beforeend", styles);

// // Initialize portfolio when DOM is ready
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", () => new Portfolio());
// } else {
//   new Portfolio();
// }

// // Handle keyboard navigation
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     const portfolio = window.portfolioInstance;
//     if (portfolio && portfolio.isMenuOpen) {
//       portfolio.closeMobileMenu();
//     }
//   }
// });
// ================================
// ASHISH SHARMA - PORTFOLIO JS
// Interactive & Animated Features with Achievements
// ================================

class Portfolio {
  constructor() {
    this.init();
    this.setupEventListeners();
    this.createParticles();
    this.startAnimations();
    this.setupCertificateModal();
  }

  init() {
    this.navbar = document.getElementById("navbar");
    this.hamburger = document.getElementById("hamburger");
    this.navLinks = document.getElementById("navLinks");
    this.loadingScreen = document.getElementById("loadingScreen");
    this.roleText = document.getElementById("roleText");
    this.contactForm = document.getElementById("contactForm");

    this.roles = [
      "Full Stack Developer",
      "React Developer",
      "UI/UX Designer",
      "Backend Engineer",
      "Problem Solver",
      "Oracle Certified Professional",
    ];
    this.currentRole = 0;
    this.isMenuOpen = false;

    this.hideLoadingScreen();
    this.addCertificateStyles();
  }

  setupEventListeners() {
    // Window events
    window.addEventListener("scroll", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleResize());

    // Navigation
    this.hamburger?.addEventListener("click", () => this.toggleMobileMenu());

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => this.smoothScroll(e));
    });

    // Contact form
    this.contactForm?.addEventListener("submit", (e) =>
      this.handleContactForm(e)
    );

    // Close mobile menu when clicking nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (this.isMenuOpen) this.closeMobileMenu();
      });
    });
  }

  hideLoadingScreen() {
    setTimeout(() => {
      this.loadingScreen?.classList.add("hidden");
      setTimeout(() => {
        if (this.loadingScreen) this.loadingScreen.style.display = "none";
      }, 500);
    }, 1500);
  }

  handleScroll() {
    // Update navbar
    if (window.scrollY > 50) {
      this.navbar?.classList.add("scrolled");
    } else {
      this.navbar?.classList.remove("scrolled");
    }

    // Update active nav link
    this.updateActiveNavLink();

    // Animate elements on scroll
    this.animateOnScroll();
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  toggleMobileMenu() {
    if (this.isMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.navLinks?.classList.add("show");
    this.hamburger?.classList.add("active");
    document.body.style.overflow = "hidden";
    this.isMenuOpen = true;

    // Animate hamburger
    const spans = this.hamburger?.querySelectorAll("span");
    if (spans) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    }
  }

  closeMobileMenu() {
    this.navLinks?.classList.remove("show");
    this.hamburger?.classList.remove("active");
    document.body.style.overflow = "";
    this.isMenuOpen = false;

    // Reset hamburger
    const spans = this.hamburger?.querySelectorAll("span");
    if (spans) {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  }

  handleResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMobileMenu();
    }
  }

  smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  handleContactForm(e) {
    e.preventDefault();

    const button = this.contactForm.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    button.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      button.style.background = "#10b981";

      this.contactForm.reset();
      this.showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.background = "";
      }, 3000);
    }, 2000);
  }

  showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "#10b981"
                : type === "info"
                ? "#3b82f6"
                : "#ef4444"
            };
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
            max-width: 350px;
            font-family: 'Poppins', sans-serif;
        `;

    notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${
                  type === "success"
                    ? "check-circle"
                    : type === "info"
                    ? "info-circle"
                    : "exclamation-circle"
                }"></i>
                <span>${message}</span>
            </div>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease-out";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  animateOnScroll() {
    // Animate counters
    const counters = document.querySelectorAll("[data-count]");
    counters.forEach((counter) => {
      if (
        this.isInViewport(counter) &&
        !counter.classList.contains("animated")
      ) {
        this.animateCounter(counter);
        counter.classList.add("animated");
      }
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      if (this.isInViewport(bar) && !bar.classList.contains("animated")) {
        const width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
        bar.classList.add("animated");
      }
    });

    // Animate achievement stats
    const achievementStats = document.querySelectorAll(".achievement-stat");
    achievementStats.forEach((stat, index) => {
      if (this.isInViewport(stat) && !stat.classList.contains("animated")) {
        setTimeout(() => {
          stat.style.animation = "slideInUp 0.6s ease-out forwards";
          stat.classList.add("animated");
        }, index * 100);
      }
    });

    // Animate certificate cards
    const certCards = document.querySelectorAll(".certificate-card");
    certCards.forEach((card, index) => {
      if (this.isInViewport(card) && !card.classList.contains("animated")) {
        setTimeout(() => {
          card.style.animation = "fadeInUp 0.8s ease-out forwards";
          card.classList.add("animated");
        }, index * 150);
      }
    });
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight * 0.8;
  }

  animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-count"));
    const increment = target / 50; // Faster animation
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
        // Add a bounce effect when complete
        counter.style.transform = "scale(1.1)";
        setTimeout(() => {
          counter.style.transform = "scale(1)";
        }, 200);
      }
    };

    updateCounter();
  }

  createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(0, 255, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
      particlesContainer.appendChild(particle);
    }
  }

  startAnimations() {
    // Role changer
    if (this.roleText) {
      setInterval(() => {
        this.roleText.style.opacity = "0";
        this.roleText.style.transform = "translateY(10px)";

        setTimeout(() => {
          this.currentRole = (this.currentRole + 1) % this.roles.length;
          this.roleText.textContent = this.roles[this.currentRole];
          this.roleText.style.opacity = "1";
          this.roleText.style.transform = "translateY(0)";
        }, 500);
      }, 3000);
    }

    // Add entrance animations
    setTimeout(() => {
      const elements = document.querySelectorAll(".hero-text > *");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      });
    }, 200);

    // Add floating animation to achievement badges
    setTimeout(() => {
      const badges = document.querySelectorAll(".certificate-badge");
      badges.forEach((badge, index) => {
        setTimeout(() => {
          badge.style.animation = "float 3s ease-in-out infinite";
          badge.style.animationDelay = `${index * 0.5}s`;
        }, 1000);
      });
    }, 2000);
  }

  // ================================
  // CERTIFICATE MODAL FUNCTIONALITY
  // ================================

  setupCertificateModal() {
    const modal = document.getElementById("certificateModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");
    const closeCert = document.getElementById("closeCert");

    // View certificate buttons
    document.querySelectorAll(".btn-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const certificate = e.currentTarget.getAttribute("data-certificate");
        this.openCertificateModal(certificate);
      });
    });

    // Close modal events
    [modalOverlay, modalClose, closeCert].forEach((element) => {
      element?.addEventListener("click", () => this.closeCertificateModal());
    });

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal?.classList.contains("active")) {
        this.closeCertificateModal();
      }
    });

    // Download certificate
    document.getElementById("downloadCert")?.addEventListener("click", () => {
      this.showNotification(
        "Certificate download feature coming soon! 📜",
        "info"
      );
    });

    // Add certificate hover effects
    this.setupCertificateHoverEffects();
  }

  setupCertificateHoverEffects() {
    const certCards = document.querySelectorAll(
      ".certificate-card:not(.add-more)"
    );

    certCards.forEach((card) => {
      const badge = card.querySelector(".certificate-badge");

      card.addEventListener("mouseenter", () => {
        if (badge) {
          badge.style.transform = "rotate(360deg) scale(1.1)";
          badge.style.transition = "all 0.6s ease";
        }
      });

      card.addEventListener("mouseleave", () => {
        if (badge) {
          badge.style.transform = "rotate(0deg) scale(1)";
        }
      });
    });

    // Add special effect for featured certificate
    const featuredCard = document.querySelector(".certificate-card.featured");
    if (featuredCard) {
      setInterval(() => {
        featuredCard.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.6)";
        setTimeout(() => {
          featuredCard.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.3)";
        }, 1000);
      }, 3000);
    }
  }

  openCertificateModal(certificate) {
    const modal = document.getElementById("certificateModal");
    const modalTitle = document.getElementById("modalTitle");
    const certificatePreview = document.getElementById("certificatePreview");

    if (!modal || !modalTitle || !certificatePreview) {
      this.showNotification("Modal elements not found!", "error");
      return;
    }

    // Set modal content based on certificate type
    const certificateData = this.getCertificateData(certificate);

    modalTitle.textContent = certificateData.title;
    certificatePreview.innerHTML = certificateData.content;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add entrance animation to modal content
    setTimeout(() => {
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) {
        modalContent.style.animation = "modalSlideIn 0.4s ease-out";
      }
    }, 50);
  }

  closeCertificateModal() {
    const modal = document.getElementById("certificateModal");
    if (modal) {
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) {
        modalContent.style.animation = "modalSlideOut 0.3s ease-in";
      }

      setTimeout(() => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }, 300);
    }
  }

  getCertificateData(certificate) {
    const certificates = {
      oracle: {
        title: "Oracle Cloud Infrastructure - AI Foundations Associate",
        content: `
                    <div class="cert-preview oracle-cert">
                        <div class="cert-header">
                            <div class="oracle-logo">
                                <div class="oracle-badge">
                                    <i class="fas fa-cloud" style="font-size: 2rem; color: #FF0000;"></i>
                                </div>
                                <h2 style="color: #FF0000; margin: 1rem 0;">ORACLE</h2>
                                <p style="color: #333;">University</p>
                            </div>
                            <h3 style="color: var(--primary-color); margin: 2rem 0;">Oracle Certified Foundations Associate</h3>
                            <h4 style="background: linear-gradient(135deg, #FF0000, #FF6600); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 2rem;">Certificate of Recognition</h4>
                        </div>
                        <div class="cert-body">
                            <div class="certified-badge" style="display: inline-block; background: linear-gradient(135deg, #FF0000, #FF6600); color: white; padding: 1rem 2rem; border-radius: 2rem; margin: 2rem 0; font-weight: bold; font-size: 1.2rem;">
                                ORACLE Certified Foundations Associate
                            </div>
                            <p style="font-size: 1.8rem; margin: 2rem 0; color: var(--primary-color); font-weight: bold;">
                                Ashish Sharma
                            </p>
                            <p style="font-size: 1.2rem; margin: 2rem 0; line-height: 1.6;">
                                Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
                            </p>
                            <p style="margin: 2rem 0; font-style: italic;">
                                This certifies that the above named is recognized by Oracle Corporation as Oracle Certified.
                            </p>
                            <div class="cert-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid rgba(0, 255, 255, 0.2);">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; text-align: left;">
                                    <div>
                                        <p><strong>Date:</strong> August 27, 2025</p>
                                        <p><strong>Certificate ID:</strong> <span style="color: var(--primary-color); font-family: monospace;">321953140OCI25AICFA</span></p>
                                    </div>
                                    <div>
                                        <p><strong>Issued by:</strong></p>
                                        <p style="color: var(--primary-color);">Damien Carey</p>
                                        <p style="font-size: 0.9rem;">Senior Vice President, Oracle University</p>
                                    </div>
                                </div>
                            </div>
                            <div class="achievement-badges" style="margin-top: 2rem;">
                                <span class="achievement-badge" style="background: rgba(255, 0, 0, 0.1); color: #FF0000; padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(255, 0, 0, 0.3);">
                                    <i class="fas fa-cloud"></i> Cloud Infrastructure
                                </span>
                                <span class="achievement-badge" style="background: rgba(0, 255, 255, 0.1); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(0, 255, 255, 0.3);">
                                    <i class="fas fa-robot"></i> AI Foundations
                                </span>
                                <span class="achievement-badge" style="background: rgba(255, 107, 107, 0.1); color: var(--accent-color); padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(255, 107, 107, 0.3);">
                                    <i class="fas fa-certificate"></i> Oracle Certified
                                </span>
                            </div>
                        </div>
                    </div>
                `,
      },
      diploma: {
        title: "Web Development Diploma - STP Computer Education",
        content: `
                    <div class="cert-preview stp-cert">
                        <div class="cert-header">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <h2 style="color: var(--primary-color); font-size: 2rem;">STP COMPUTER EDUCATION</h2>
                                <p style="font-size: 1.1rem; margin: 0.5rem 0;">The Best Quality of Software Programming Computer Education</p>
                                <p style="font-size: 0.9rem; color: var(--text-gray);">T-2052, Gali No.2, Near Baba Balak Nath Mandir, Baljeet Nagar, Patel Nagar, New Delhi - 110008</p>
                                <p style="font-size: 0.9rem; color: var(--accent-color); font-weight: bold;">ISO 9001 : 2015 CERTIFIED</p>
                            </div>
                        </div>
                        <div class="cert-body">
                            <h3 style="color: var(--primary-color); margin: 2rem 0; font-size: 2.5rem; text-transform: uppercase; letter-spacing: 3px;">DIPLOMA</h3>
                            
                            <div style="background: rgba(0, 255, 255, 0.05); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(0, 255, 255, 0.2); margin: 2rem 0;">
                                <p style="margin-bottom: 1rem;">This is to certify that</p>
                                <p style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin: 1rem 0;">ASHISH SHARMA</p>
                                <p style="margin-bottom: 1rem;">Son of Sh. <strong>OMPRAKASH SHARMA</strong></p>
                                <p style="margin-bottom: 1rem;">Has successfully completed</p>
                                <p style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color); margin: 1rem 0;">WEB DEVELOPMENT COURSE</p>
                                <p style="margin-bottom: 1rem;">of <strong>12 months</strong> duration</p>
                                <p style="margin-bottom: 1rem;">from <strong>August 2024</strong> to <strong>August 2025</strong></p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 1rem 2rem; border-radius: 2rem; display: inline-block; margin: 2rem 0; font-size: 1.2rem; font-weight: bold;">
                                Grade Achieved: B Grade (77%)
                            </div>
                            
                            <div class="cert-footer" style="margin-top: 2rem; padding-top: 1rem; border-top: 2px solid rgba(0, 255, 255, 0.2);">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; text-align: left;">
                                    <div>
                                        <p><strong>Diploma No.:</strong> <span style="color: var(--primary-color);">408215</span></p>
                                        <p><strong>Student Reg. No.:</strong> <span style="color: var(--primary-color);">695956</span></p>
                                    </div>
                                    <div>
                                        <p><strong>Date of Issue:</strong> 15-Aug-2025</p>
                                        <p><strong>Website:</strong> <span style="color: var(--primary-color);">stpcomputereducation.com</span></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="certification-badges" style="margin-top: 2rem;">
                                <span style="background: rgba(0, 255, 255, 0.1); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(0, 255, 255, 0.3);">
                                    <i class="fas fa-graduation-cap"></i> 12 Months Training
                                </span>
                                <span style="background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(16, 185, 129, 0.3);">
                                    <i class="fas fa-medal"></i> B Grade
                                </span>
                                <span style="background: rgba(255, 107, 107, 0.1); color: var(--accent-color); padding: 0.5rem 1rem; border-radius: 1rem; margin: 0.25rem; display: inline-block; border: 1px solid rgba(255, 107, 107, 0.3);">
                                    <i class="fas fa-certificate"></i> ISO Certified Institute
                                </span>
                            </div>
                        </div>
                    </div>
                `,
      },
      marksheet: {
        title: "Web Development Course - Official Marksheet",
        content: `
                    <div class="cert-preview marksheet">
                        <div class="cert-header">
                            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">STP COMPUTER EDUCATION</h2>
                            <h3 style="color: var(--text-gray); margin-bottom: 2rem;">OFFICIAL MARKSHEET</h3>
                        </div>
                        <div class="cert-body">
                            <div class="marksheet-details" style="background: rgba(0, 255, 255, 0.05); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(0, 255, 255, 0.2); margin: 2rem 0;">
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                                    <div class="detail-row">
                                        <strong>Student Name:</strong> <span style="color: var(--primary-color);">ASHISH SHARMA</span>
                                    </div>
                                    <div class="detail-row">
                                        <strong>Registration No.:</strong> <span style="color: var(--primary-color);">695956</span>
                                    </div>
                                    <div class="detail-row">
                                        <strong>Father's Name:</strong> OMPRAKASH SHARMA
                                    </div>
                                    <div class="detail-row">
                                        <strong>Course:</strong> <span style="color: var(--primary-color);">WEB DEVELOPMENT</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="marks-table" style="margin: 2rem 0;">
                                <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Course Performance</h4>
                                <table style="width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem; overflow: hidden;">
                                    <thead>
                                        <tr style="background: rgba(0,255,255,0.2);">
                                            <th style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); color: var(--primary-color);">Course</th>
                                            <th style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); color: var(--primary-color);">Max Marks</th>
                                            <th style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); color: var(--primary-color);">Min Marks</th>
                                            <th style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); color: var(--primary-color);">Obtained</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3);">Web Development Course</td>
                                            <td style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); text-align: center;">100</td>
                                            <td style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); text-align: center;">33</td>
                                            <td style="padding: 1rem; border: 1px solid rgba(0,255,255,0.3); text-align: center; color: var(--primary-color); font-weight: bold; font-size: 1.2rem;">77</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="grade-scale" style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
                                <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Grade Scale</h4>
                                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                                    <div style="text-align: center; padding: 0.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.3rem;">
                                        <div style="font-weight: bold; color: #10b981;">A</div>
                                        <div style="font-size: 0.8rem;">80-100%</div>
                                    </div>
                                    <div style="text-align: center; padding: 0.5rem; background: rgba(0, 255, 255, 0.2); border-radius: 0.3rem; border: 2px solid var(--primary-color);">
                                        <div style="font-weight: bold; color: var(--primary-color);">B</div>
                                        <div style="font-size: 0.8rem;">60-79%</div>
                                    </div>
                                    <div style="text-align: center; padding: 0.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.3rem;">
                                        <div style="font-weight: bold; color: #f59e0b;">C</div>
                                        <div style="font-size: 0.8rem;">40-59%</div>
                                    </div>
                                    <div style="text-align: center; padding: 0.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.3rem;">
                                        <div style="font-weight: bold; color: #ef4444;">D</div>
                                        <div style="font-size: 0.8rem;">33-39%</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="result-summary" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 2rem 0;">
                                <div style="text-align: center; padding: 1.5rem; background: rgba(16, 185, 129, 0.1); border-radius: 0.5rem; border: 1px solid rgba(16, 185, 129, 0.3);">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: #10b981; margin-bottom: 0.5rem;">PASS</div>
                                    <div style="font-size: 0.9rem; color: var(--text-gray);">Result</div>
                                </div>
                                <div style="text-align: center; padding: 1.5rem; background: rgba(0, 255, 255, 0.1); border-radius: 0.5rem; border: 1px solid rgba(0, 255, 255, 0.3);">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">B</div>
                                    <div style="font-size: 0.9rem; color: var(--text-gray);">Grade</div>
                                </div>
                                <div style="text-align: center; padding: 1.5rem; background: rgba(0, 255, 255, 0.1); border-radius: 0.5rem; border: 1px solid rgba(0, 255, 255, 0.3);">
                                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">77%</div>
                                    <div style="font-size: 0.9rem; color: var(--text-gray);">Percentage</div>
                                </div>
                            </div>
                            
                            <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(0, 255, 255, 0.2);">
                                <p><strong>Date of Issue:</strong> <span style="color: var(--primary-color);">15-Aug-2025</span></p>
                            </div>
                        </div>
                    </div>
                `,
      },
      windsurf1: {
        title: "Vibe Coding in Windsurf - Certificate 1",
        content: `
                    <div class="cert-preview windsurf-cert">
                        <div class="cert-header" style="background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 102, 255, 0.1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 255, 255, 0.2); margin-bottom: 2rem;">
                            <div style="text-align: center;">
                                <div style="width: 80px; height: 80px; background: var(--gradient); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: var(--dark-bg);">
                                    <i class="fas fa-wind"></i>
                                </div>
                                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">CERTIFICATE OF COMPLETION</h2>
                                <div style="width: 100px; height: 3px; background: var(--gradient); margin: 0 auto;"></div>
                            </div>
                        </div>
                        <div class="cert-body">
                            <p style="font-size: 1.2rem; margin-bottom: 1rem;">Awarded to</p>
                            <h3 style="color: var(--primary-color); margin: 1rem 0; font-size: 2.5rem; font-weight: bold; text-transform: uppercase;">asmuna9173</h3>
                            <p style="margin-bottom: 1rem; font-size: 1.1rem;">For successfully completing the Free Course</p>
                            <h4 style="color: var(--primary-color); font-size: 1.8rem; margin: 2rem 0; font-weight: 600;">Guide to Vibe Coding in Windsurf</h4>
                            <p style="margin: 2rem 0; font-size: 1.1rem;">Provided by <span style="color: var(--primary-color); font-weight: bold;">Online Learning Platform</span></p>
                            
                            <div class="skills-learned" style="background: rgba(0, 255, 255, 0.05); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(0, 255, 255, 0.2); margin: 2rem 0;">
                                <h5 style="color: var(--primary-color); margin-bottom: 1rem;">Skills & Topics Covered:</h5>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                    <span style="background: rgba(0, 255, 255, 0.1); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 1rem; border: 1px solid rgba(0, 255, 255, 0.3); font-size: 0.9rem;">
                                        <i class="fas fa-code"></i> Modern Coding Practices
                                    </span>
                                    <span style="background: rgba(0, 102, 255, 0.1); color: var(--secondary-color); padding: 0.5rem 1rem; border-radius: 1rem; border: 1px solid rgba(0, 102, 255, 0.3); font-size: 0.9rem;">
                                        <i class="fas fa-tools"></i> Development Tools
                                    </span>
                                    <span style="background: rgba(255, 107, 107, 0.1); color: var(--accent-color); padding: 0.5rem 1rem; border-radius: 1rem; border: 1px solid rgba(255, 107, 107, 0.3); font-size: 0.9rem;">
                                        <i class="fas fa-lightbulb"></i> Best Practices
                                    </span>
                                    <span style="background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 0.5rem 1rem; border-radius: 1rem; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.9rem;">
                                        <i class="fas fa-wind"></i> Windsurf IDE
                                    </span>
                                </div>
                            </div>
                            
                            <div class="cert-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid rgba(0, 255, 255, 0.2);">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <p><strong>Date:</strong> <span style="color: var(--primary-color);">August 13, 2025</span></p>
                                        <p><strong>Certificate ID:</strong> <span style="color: var(--primary-color); font-family: monospace;">v1wbt9fps7</span></p>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="width: 100px; height: 100px; background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid var(--primary-color);">
                                            <i class="fas fa-certificate" style="font-size: 2rem; color: var(--primary-color);"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
      },
      windsurf2: {
        title: "Vibe Coding in Windsurf - Certificate 2",
        content: `
                    <div class="cert-preview windsurf-cert">
                        <div class="cert-header" style="background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(255, 107, 107, 0.1)); padding: 2rem; border-radius: 1rem; border: 2px solid rgba(0, 102, 255, 0.2); margin-bottom: 2rem;">
                            <div style="text-align: center;">
                                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--secondary-color), var(--accent-color)); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem; color: white;">
                                    <i class="fas fa-wind"></i>
                                </div>
                                <h2 style="color: var(--secondary-color); margin-bottom: 1rem;">CERTIFICATE OF COMPLETION</h2>
                                <div style="width: 100px; height: 3px; background: linear-gradient(135deg, var(--secondary-color), var(--accent-color)); margin: 0 auto;"></div>
                            </div>
                        </div>
                        <div class="cert-body">
                            <p style="font-size: 1.2rem; margin-bottom: 1rem;">Awarded to</p>
                            <h3 style="color: var(--secondary-color); margin: 1rem 0; font-size: 2.5rem; font-weight: bold; text-transform: uppercase;">asmuna9173</h3>
                            <p style="margin-bottom: 1rem; font-size: 1.1rem;">For successfully completing the Free Course</p>
                            <h4 style="color: var(--secondary-color); font-size: 1.8rem; margin: 2rem 0; font-weight: 600;">Guide to Vibe Coding in Windsurf</h4>
                            <p style="margin: 2rem 0; font-size: 1.1rem;">Provided by <span style="color: var(--secondary-color); font-weight: bold;">Online Learning Platform</span></p>
                            
                            <div class="completion-badge" style="background: linear-gradient(135deg, var(--secondary-color), var(--accent-color)); color: white; padding: 1rem 2rem; border-radius: 2rem; display: inline-block; margin: 2rem 0; font-weight: bold; font-size: 1.1rem;">
                                <i class="fas fa-star"></i> Course Successfully Completed <i class="fas fa-star"></i>
                            </div>
                            
                            <div class="achievement-highlights" style="background: rgba(0, 102, 255, 0.05); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(0, 102, 255, 0.2); margin: 2rem 0;">
                                <h5 style="color: var(--secondary-color); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-trophy"></i> Achievement Highlights
                                </h5>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-check-circle" style="color: #10b981;"></i>
                                        Completed comprehensive coding course
                                    </li>
                                    <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-check-circle" style="color: #10b981;"></i>
                                        Mastered Windsurf development environment
                                    </li>
                                    <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-check-circle" style="color: #10b981;"></i>
                                        Applied modern development practices
                                    </li>
                                    <li style="display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-check-circle" style="color: #10b981;"></i>
                                        Demonstrated practical coding skills
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="cert-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid rgba(0, 102, 255, 0.2);">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        <p><strong>Date:</strong> <span style="color: var(--secondary-color);">August 13, 2025</span></p>
                                        <p><strong>Certificate ID:</strong> <span style="color: var(--secondary-color); font-family: monospace;">v1wbt9fps7</span></p>
                                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">Second certification in the series</p>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="width: 100px; height: 100px; background: radial-gradient(circle, rgba(0, 102, 255, 0.2), transparent); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid var(--secondary-color);">
                                            <i class="fas fa-award" style="font-size: 2rem; color: var(--secondary-color);"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
      },
    };

    return (
      certificates[certificate] || {
        title: "Certificate Preview",
        content:
          '<div class="cert-preview"><p style="text-align: center; color: var(--text-gray); padding: 3rem;">Certificate data not found.</p></div>',
      }
    );
  }

  addCertificateStyles() {
    const styles = `
            <style>
                /* Certificate Modal Animations */
                @keyframes modalSlideIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8) translateY(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                @keyframes modalSlideOut {
                    from {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: scale(0.8) translateY(-50px);
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInRight {
                    from { 
                        opacity: 0; 
                        transform: translateX(100%); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                @keyframes slideOutRight {
                    from { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                    to { 
                        opacity: 0; 
                        transform: translateX(100%); 
                    }
                }
                
                /* Certificate Preview Styles */
                .cert-preview {
                    text-align: center;
                    padding: 2rem;
                    background: linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(0, 102, 255, 0.05));
                    border-radius: 1rem;
                    border: 2px solid rgba(0, 255, 255, 0.2);
                    position: relative;
                    overflow: hidden;
                }
                
                .cert-preview::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
                
                .cert-header {
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid rgba(0, 255, 255, 0.2);
                }
                
                .cert-header h2 {
                    margin-bottom: 0.5rem;
                    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
                }
                
                .cert-body p {
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                
                .cert-footer {
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(0, 255, 255, 0.2);
                }
                
                /* Hero text entrance animations */
                .hero-text > * {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease;
                }
                
                /* Button and form styles */
                .btn:disabled {
                    cursor: not-allowed;
                    opacity: 0.7;
                    transform: none !important;
                }
                
                /* Focus styles for accessibility */
                .nav-link:focus,
                .btn:focus,
                .btn-view:focus,
                .btn-verify:focus,
                .social-link:focus,
                .modal-close:focus {
                    outline: 2px solid var(--primary-color);
                    outline-offset: 2px;
                    border-radius: 0.25rem;
                }
                
                /* Smooth transitions for interactive elements */
                .nav-link,
                .btn,
                .btn-view,
                .btn-verify,
                .social-link,
                .project-card,
                .service-card,
                .skill-item,
                .certificate-card,
                .achievement-stat {
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                
                /* Certificate card special effects */
                .certificate-card.featured {
                    animation: featuredGlow 3s ease-in-out infinite;
                }
                
                @keyframes featuredGlow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
                    }
                }
                
                /* Role text transition */
                .role-highlight {
                    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                
                /* Stat number animation */
                .stat-number {
                    transition: transform 0.2s ease;
                }
            </style>
        `;

    document.head.insertAdjacentHTML("beforeend", styles);
  }
}

// Initialize portfolio when DOM is ready
let portfolioInstance;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    portfolioInstance = new Portfolio();
    window.portfolioInstance = portfolioInstance; // Make it globally accessible
  });
} else {
  portfolioInstance = new Portfolio();
  window.portfolioInstance = portfolioInstance;
}

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && portfolioInstance) {
    if (portfolioInstance.isMenuOpen) {
      portfolioInstance.closeMobileMenu();
    }

    // Close certificate modal if open
    const modal = document.getElementById("certificateModal");
    if (modal && modal.classList.contains("active")) {
      portfolioInstance.closeCertificateModal();
    }
  }
});

// Export for potential module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Portfolio };
}
