// ================================
// ASHISH SHARMA - PORTFOLIO JS
// Interactive & Animated Features
// ================================

class Portfolio {
  constructor() {
    this.init();
    this.setupEventListeners();
    this.createParticles();
    this.startAnimations();
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
    ];
    this.currentRole = 0;
    this.isMenuOpen = false;

    this.hideLoadingScreen();
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
            background: ${type === "success" ? "#10b981" : "#ef4444"};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
            font-family: 'Poppins', sans-serif;
        `;

    notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${
                  type === "success" ? "check-circle" : "exclamation-circle"
                }"></i>
                <span>${message}</span>
            </div>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease-out";
      setTimeout(() => document.body.removeChild(notification), 300);
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
  }

  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  }

  animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-count"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
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
        setTimeout(() => {
          this.currentRole = (this.currentRole + 1) % this.roles.length;
          this.roleText.textContent = this.roles[this.currentRole];
          this.roleText.style.opacity = "1";
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
  }
}

// Add dynamic styles
const styles = `
    <style>
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideOutRight {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(100%); }
        }
        
        .hero-text > * {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        
        .btn:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }
        
        .nav-link:focus,
        .btn:focus,
        .social-link:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    </style>
`;

document.head.insertAdjacentHTML("beforeend", styles);

// Initialize portfolio when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Portfolio());
} else {
  new Portfolio();
}

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const portfolio = window.portfolioInstance;
    if (portfolio && portfolio.isMenuOpen) {
      portfolio.closeMobileMenu();
    }
  }
});
