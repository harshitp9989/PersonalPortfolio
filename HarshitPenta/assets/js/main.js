AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
          const text = this.previousElementSibling; // Assuming the text to expand is just before the button
          if (text.style.display === "none" || text.style.display === "") {
              text.style.display = "block";
              this.textContent = "Read Less";
          } else {
              text.style.display = "none";
              this.textContent = "Read More";
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Check if screen size is less than large
                var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.getElementById("profileImage");
    const imageContainer = document.getElementById("imageContainer");
    const contactForm = document.getElementById("contactForm");

    profileImage.addEventListener("click", function() {
        imageContainer.style.display = "none";
        contactForm.style.display = "block";
    });
});

