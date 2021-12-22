// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

window.addEventListener('scroll', reveal);

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`);

        });
    }

    handleClick() {
        // console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();

// let progressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");
// // console.log(progressBar, valueContainer);
// let progressValue = 0;
// let progressEndValue = 75;
// let speed = 20;

// let progress = setInterval(() => {
//     progressValue++;
//     //console.log(progressValue);
//     valueContainer.textContent = `${progressValue}%`;
//     progressBar.style.background = `conic-gradient(#4d5bf9 ${progressValue * 3.6}deg,#cadcff ${progressValue * 3.6}deg)`;
//     if (progressValue == progressEndValue) {
//         clearInterval(progress);
//     }
// }, speed);

//Função para a animação de scroll funcionar
function reveal() {

    var reveals = document.querySelectorAll('.reveal');
    var linhadotempo = document.querySelectorAll('.linhadotempo');
    //contador aparecer áreas da página
    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
    //contador aparecer barras de progressão
    for (var i = 0; i < linhadotempo.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = linhadotempo[i].getBoundingClientRect().top
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            linhadotempo[i].classList.add('alive');
        } else {
            linhadotempo[i].classList.remove('alive');
        }
    }


}

//  const header = document.querySelector("header");
//  const areanome = document.querySelector(".areanome");

//  const sectionOneOptions = {
//      rootMargin: "-200px 0px 0px 0px"
//  };

//  const sectionOneObserver = new IntersectionObserver(function(
//          entries,
//          sectionOneObserver
//      ) {
//          entries.forEach(entry => {
//              if (!entry.isIntersecting) {
//                  header.classList.add('nav-scrolled');
//              } else {
//                  header.classList.remove('nav-scrolled');
//              }
//          });
//      },
//      sectionOneOptions);

//  sectionOneObserver.observe(sectionOne);