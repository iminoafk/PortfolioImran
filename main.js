const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".onglet");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, acceuil) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            acceuil / 7 + 0.5
          }s`;
        }
      });
      //burger animation
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();