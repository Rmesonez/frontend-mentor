const hamburger = document.querySelector(".nav__icon"); 
const logo = document.querySelector(".nav__logo");
const menu = document.querySelector(".nav__list");
let openMenu = true;

    hamburger.addEventListener("click", (e) => {
        e.preventDefault();
        if(openMenu){
            openMenu = false;
            logo.src = "./images/logo-bookmark.svg";
            hamburger.src = "./images/icon-hamburger.svg";
            menu.classList.add("nav__list--show");
            logo.classList.add("nav__logo--show");
            hamburger.classList.add("nav__icon--show");
        } else {
            openMenu = true;
            logo.src = "./images/logo-bookmark-white.svg";
            hamburger.src = "./images/icon-close.svg";
            menu.classList.remove("nav__list--show");
            logo.classList.remove("nav__logo--show");
            hamburger.classList.remove("nav__icon--show");
        }

        menu.classList.toggle("nav__list--show");
        
    });
    
    menu.classList.toggle("nav__list--show");
    

    