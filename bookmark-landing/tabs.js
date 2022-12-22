const featuresLinks = document.querySelector(".features__tabs");
const sections = document.querySelectorAll(".features__section");
let currentLink = document.querySelector(".features__link");


featuresLinks.addEventListener("click", (e) => {
    e.preventDefault();
    const currentElement = e.target;

    // console.log(currentElement.classList.value);

    if(isActive(currentElement, "features__link")){

        currentLink.classList.remove("features__link--active");
        currentElement.classList.add("features__link--active");
        currentLink = currentElement;
        
        let currentSection = Number(currentLink.getAttribute("data-tab"));
        let nextSection = Number(currentElement.getAttribute("data-tab"));

        for(let i = 0; i < sections.length; i++){
            if(isActive(sections[i], "features__section--active")){
                sections[i].classList.remove("features__section--active");
            }
        }
        
         sections[currentSection].classList.remove("features__section--active");
         sections[nextSection].classList.add("features__section--active");
        

      
    }
});

function isActive(element, string){
    return element.classList.value.includes(string);
}
