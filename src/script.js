//navbar

// window.addEventListener('scroll', function () {
//     const navbar = document.getElementById('nav');
//     if (window.scrollY > 80) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
  
//   console.log('script');
  
//   document.addEventListener("DOMContentLoaded", () => {


//     const slides = document.getElementsByClassName("slide");
//     let current = 0;
    

//     setInterval(() => {
//       slides[current].classList.remove("active");
//       current = (current + 1) % slides.length;
//       slides[current].classList.add("active");
//     }, 4000);
// });







// home page counting

  const nums = document.getElementsByClassName(".stat span");
  let counted = false;

  function runCounter() {
    if (counted) return;
    if (window.scrollY + window.innerHeight >= document.querySelector(".stats").offsetTop) {
      nums.forEach(el => {
        let target = +el.getAttribute("data-val");
        let count = 0;
        let speed = target / 100;

        let update = () => {
          count += speed;
          if (count < target) {
            el.innerText = Math.floor(count);
            requestAnimationFrame(update);
          } else {
            el.innerText = target;
          }
        };
        update();
      });
      counted = true;
    }
  }

  window.addEventListener("scroll", runCounter);

