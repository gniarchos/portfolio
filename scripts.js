AOS.init()

particlesJS("particles-js", {
  particles: {
    number: { value: 99, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
  },
  retina_detect: true,
})

const menu_btn = document.getElementById("hamburger")
const links_btn = document.getElementById("mobile-nav")

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active")
  links_btn.classList.toggle("is-active")
})

function scrollToProjects(element) {
  var proj = document.getElementById("projects")
  proj.scrollIntoView()

  var id = element.id

  if (id !== "view-projects") {
    menu_btn.classList.toggle("is-active")
    links_btn.classList.toggle("is-active")
  }
}

function scrollToContact() {
  var proj = document.getElementById("contact")
  proj.scrollIntoView()
  menu_btn.classList.toggle("is-active")
  links_btn.classList.toggle("is-active")
}

let photo_selection = ".slider_desktop"
let sliders = null
let currentSlide = 0

runSlider()

function runSlider() {
  let sliders = document.querySelectorAll(photo_selection)
  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(`.slide`)
    let currentSlide = 0

    const showSlide = (slide) => {
      slides.forEach((slide) => slide.classList.remove("active"))
      slides[slide].classList.add("active")
    }

    const nextSlide = () => {
      currentSlide++
      if (currentSlide >= slides.length) {
        currentSlide = 0
      }

      showSlide(currentSlide)
    }

    const prevSlide = () => {
      currentSlide--
      if (currentSlide < 0) {
        currentSlide = slides.length - 1
      }
      showSlide(currentSlide)
    }

    function initSlider() {
      showSlide(currentSlide)
      slider.querySelector(".next").addEventListener("click", nextSlide)
      slider.querySelector(".prev").addEventListener("click", prevSlide)
    }

    initSlider()
  })
}

// const desktopButton_1 = document.querySelector(".desktop_1")
// const mobileButton_1 = document.querySelector(".mobile_1")
// const desktopButton_2 = document.querySelector(".desktop_2")
// const mobileButton_2 = document.querySelector(".mobile_2")

// function desktopClicked() {
//   desktopButton_1.classList.add("fadeButton")
//   mobileButton_1.classList.remove("fadeButton")

//   desktopButton_2.classList.add("fadeButton")
//   mobileButton_2.classList.remove("fadeButton")

//   photo_selection = ".slider_desktop"

//   slider_desktop.style.display = "block"
//   slider_mobile.style.display = "none"
//   runSlider()
// }

// function mobileClicked() {
//   mobileButton_1.classList.add("fadeButton")
//   desktopButton_1.classList.remove("fadeButton")

//   mobileButton_2.classList.add("fadeButton")
//   desktopButton_2.classList.remove("fadeButton")

//   photo_selection = ".slider_mobile"

//   slider_desktop.style.display = "none"
//   slider_mobile.style.display = "block"
//   runSlider()
// }

// Get all project elements
const projects = document.querySelectorAll(".project-container")

// Loop through each project
projects.forEach((project) => {
  const desktopPhotosButton = project.querySelector(".desktop")
  const mobilePhotosButton = project.querySelector(".mobile")

  const slider_desktop = project.querySelector(".slider_desktop")
  const slider_mobile = project.querySelector(".slider_mobile")

  desktopPhotosButton.addEventListener("click", () => {
    // Handle desktop photos button click for this project
    // console.log("Desktop photos clicked for project", project)

    desktopPhotosButton.classList.add("fadeButton")
    mobilePhotosButton.classList.remove("fadeButton")

    photo_selection = ".slider_desktop"

    slider_desktop.style.display = "block"
    slider_mobile.style.display = "none"
    runSlider()
  })

  mobilePhotosButton.addEventListener("click", () => {
    // Handle mobile photos button click for this project
    // console.log("Mobile photos clicked for project", project)

    mobilePhotosButton.classList.add("fadeButton")
    desktopPhotosButton.classList.remove("fadeButton")

    photo_selection = ".slider_mobile"

    slider_desktop.style.display = "none"
    slider_mobile.style.display = "block"
    runSlider()
  })
})
