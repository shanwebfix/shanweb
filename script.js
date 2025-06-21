const menuToggle = document.getElementById('menuToggle');
const offcanvasMenu = document.getElementById('offcanvasMenu');
const closeMenu = document.getElementById('closeMenu');
const header = document.querySelector('.main-header');

let scrollPosition = 0;

// Open offcanvas menu
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  // Save current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Lock scroll
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';

  offcanvasMenu.classList.add('active');
});

// Close offcanvas menu
closeMenu.addEventListener('click', () => {
  offcanvasMenu.classList.remove('active');

  // Unlock scroll
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});










const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === 'block';

    // সব FAQ answer বন্ধ করো
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    // সব arrow remove active ক্লাস করো
    questions.forEach(q => q.classList.remove('active'));

    if (!isOpen) {
      answer.style.display = 'block';
      question.classList.add('active');
    }
  });
});












// Portfolio Image Auto Scroll on Click + Manual Drag Scroll
document.querySelectorAll('.image-container').forEach(container => {
  // Click to auto scroll
  container.addEventListener('click', () => {
    container.scrollTop += 100;
  });

  // Drag to scroll manually
  let isDown = false;
  let startY;
  let scrollTop;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startY = e.pageY - container.offsetTop;
    scrollTop = container.scrollTop;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - container.offsetTop;
    const walk = (y - startY) * 1.5; // sensitivity
    container.scrollTop = scrollTop - walk;
  });
});




// Testimonial Slider

const swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });