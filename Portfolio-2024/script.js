const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-tags");
const imageSlide = document.querySelector(".certifications");
const gallery = document.querySelector(".gallery");

// Hamburger Menu

const toggleMenu = () => {
  hamMenu.classList.toggle("active");
};

const clicksOutside = (event) => {
  if (!hamMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamMenu.classList.remove("active");
  }
};

hamburger.addEventListener("click", toggleMenu);
document.addEventListener("click", clicksOutside);

// Certificates

const urlsCertis = [
  "assests/certifications/Drones_Workshop_page-0001.jpg",
  "assests/certifications/EnglishWriting_page-0001.jpg",
  "assests/certifications/GitCryptex_page-0001.jpg",
  "assests/certifications/PythonBasics_page-0001.jpg",
  "assests/certifications/Srujana_Volunteering_page-0001.jpg",
];

let currentIndex = 0;

const toggleImage = () => {
  currentIndex = (currentIndex + 1) % urlsCertis.length;
  imageSlide.style.backgroundImage = `url(${urlsCertis[currentIndex]})`;
};

imageSlide.addEventListener("click", toggleImage);

// Projects

const urlsProjects = [
  "https://amazon-proj-by-ash.netlify.app/",
  "https://github.com/GodishalaAshwith/youtube-clone-proj",
  "https://rock-paper-scissors-byash.netlify.app/",
  "https://tic-tac-toe-byash.netlify.app/",
  "https://weather-app-by-ash.netlify.app/",
];

const imgBoxes = gallery.children;
console.log(imgBoxes);

for (let i = 0; i < imgBoxes.length; i++) {
  imgBoxes[i].addEventListener(
    "click",
    (() => {
      return () => {
        window.open(urlsProjects[i], "_blank");
      };
    })()
  );
}
