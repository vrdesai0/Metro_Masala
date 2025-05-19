// navbar

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav');
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  console.log('script');
  
  document.addEventListener("DOMContentLoaded", () => {


    const slides = document.getElementsByClassName("slide");
    let current = 0;
    

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
});






