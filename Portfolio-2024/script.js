const hamburger = document.querySelector(".hamburger");

const imageSlide = document.querySelector(".certifications")

const toggleMenu = () => {
  const hamMenu = document.querySelector(".ham-tags");
  hamMenu.classList.toggle("active");
}

hamburger.addEventListener('click' , toggleMenu );

const urls = [
  "assests/certifications/Drones_Workshop_page-0001.jpg",
  "assests/certifications/EnglishWriting_page-0001.jpg",
  "assests/certifications/GitCryptex_page-0001.jpg",
  "assests/certifications/PythonBasics_page-0001.jpg",
  "assests/certifications/Srujana_Volunteering_page-0001.jpg"
];

let currentIndex = 0;

const toggleImage = () => {
  currentIndex = (currentIndex + 1) % urls.length;
  imageSlide.style.backgroundImage = `url(${urls[currentIndex]})`;
};

imageSlide.addEventListener('click', toggleImage)