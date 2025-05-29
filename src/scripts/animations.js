// Enhanced animations and interactions for Teevi website
class TeeviAnimations {
  constructor() {
    this.init()
  }

  init() {
    this.setupSmoothScrolling()
    this.setupParallaxEffect()
    this.createParticles()
    this.setupIntersectionObserver()
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()

        const targetId = anchor.getAttribute("href")
        if (targetId === "#" || !targetId) return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.offsetTop
          const offsetPosition = elementPosition - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }

  setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll(".blob")
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      parallaxElements.forEach((element, index) => {
        const speed = 0.2 + index * 0.1
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    })
  }

  createParticles() {
    const particlesContainer = document.querySelector(".particles-container")
    if (!particlesContainer) return

    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30))

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")

      // Random properties for each particle
      const size = Math.random() * 3 + 1
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const delay = Math.random() * 10
      const duration = Math.random() * 15 + 15
      const opacity = Math.random() * 0.4 + 0.1

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
      `

      particlesContainer.appendChild(particle)
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe elements that should animate in
    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new TeeviAnimations())
} else {
  new TeeviAnimations()
}
