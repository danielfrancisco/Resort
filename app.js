const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
window.onscroll=function(){
  linksContainer.style.height = 0;
}
  
navToggle.addEventListener("click", function () {
  

   const linksHeight = links.getBoundingClientRect().height;
   const containerHeight = linksContainer.getBoundingClientRect().height;
  
  
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  }
  else {
    linksContainer.style.height = 0;
  }
  
});

function ov(){
  b = document.getElementById("but")
  b.style.background = "black"
  b.style.color = "white"
}

function ou(){
  b = document.getElementById("but")
  b.style.background = "white"
  b.style.color = "green"
}


const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > 0) {
    navbar.classList.add("fixed-nav");
    navbar.style.background="black";
    navbar.style.zIndex = "2"
    
    
    
  } else {
    navbar.classList.remove("fixed-nav");
    navbar.style.background="transparent";
    
    
  }
  

  if (scrollHeight > 500) {
    console.log("helo");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    
    linksContainer.style.height = 0;
  });
});
