const menuToggle = document.getElementById('menuToggle');
const offcanvasMenu = document.getElementById('offcanvasMenu');
const closeMenu = document.getElementById('closeMenu');
const header = document.querySelector('.main-header');

let scrollPosition = 0;

// Open menu
menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  // First show the menu immediately
  offcanvasMenu.classList.add('active');

  // Delay scroll lock to next frame (for smoother animation)
  setTimeout(() => {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  }, 10); // 10ms delay is enough
});

// Close menu
closeMenu.addEventListener('click', () => {
  offcanvasMenu.classList.remove('active');

  // Unlock scroll after animation ends
  setTimeout(() => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  }, 300); // match your transition duration (0.3s)
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




// Footer Up Arrow
const scrollCircle = document.querySelector('.circle');
const scrollBtn = document.getElementById('scrollToTopCircle');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Update circle progress
  scrollCircle.setAttribute('stroke-dasharray', `${scrollPercent}, 100`);

  // Hide or show button based on scroll position
  if (scrollTop < 100) {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.pointerEvents = 'none';
  } else {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.pointerEvents = 'auto';
  }
});

// Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // io
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  });


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Disable drag (for images & content)
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// Optional: Prevent saving images via right-click or dragging
document.querySelectorAll('img').forEach(function(img) {
  img.setAttribute('draggable', 'false');
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});









 
  // Open popup
  document.querySelectorAll('.popup-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const popupId = this.dataset.popup;
      document.getElementById(popupId).style.display = 'flex';
    });
  });

  // Close popup
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.custom-popup').style.display = 'none';
    });
  });

  // Optional: Click outside to close
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.custom-popup').forEach(popup => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });


