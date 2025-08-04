function loadSection(path, elementId, callback) {
  console.log("Loading:", path, "into:", elementId);
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${path}, status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(elementId);
      if (!container) {
        console.warn(`Container with id "${elementId}" not found!`);
        return;
      }
      container.innerHTML = html;

      if (typeof callback === "function") {
        setTimeout(callback, 0);
      }
    })
    .catch(err => {
      console.error("Error loading section:", err);
      const container = document.getElementById(elementId);
      if (container) container.innerHTML = "কনটেন্ট লোড করতে সমস্যা হয়েছে!";
    });
}

loadSection("/fetch/753qwyyuirtt4r2r7.html", "wutyitf489uh");
loadSection("/fetch/hjsguaw22228y456.html", "gdsshhhhe");
loadSection("/fetch/seyaggiuafe.html", "saFrfwgwrf");
loadSection("/fetch/afcadjfcapppvkjdgfcgd.html", "sfgargwa");

// portfolio section with callback to initPortfolio
loadSection("/fetch/afafcadpppapappavhappapp.html", "sgwrafwe", () => {
  if (typeof initPortfolio === "function") {
    initPortfolio();
  } else {
    console.warn("initPortfolio() not defined");
  }
});

loadSection("/fetch/auyfcafwacawjhwffwjfjwhf.html", "svgsfwrrfwegwaergwr");
loadSection("/fetch/satrtvvtfvctvtvtctu.html", "rheafsazcf");
loadSection("/fetch/hagjsskglgssksgsskgsjkgsg.html", "wsyfaEFGsb");
loadSection("/fetch/acbavbcppabagppavbappabvapp.html", "sgsfsgaetgbhnje");

// faq

loadSection("/fetch/agcfadfffjksffflhffflfiufu.html", "weftwgsrfbdfjhrsye", () => {
  if (typeof initfaq === "function") {
    initfaq();
  } else {
    console.warn("initfaq() not defined");
  }
});


loadSection("/fetch/coyiocyiertocccuccyssfcyotycc.html", "ehestwarhst");
loadSection("/fetch/;oysiofofoifiofioffiofyfffsyfyofy.html", "saytfuyaetfdef");








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


