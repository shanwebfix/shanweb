function inithadfa() {
  const menuToggle = document.getElementById('menuToggle');
  const offcanvasMenu = document.getElementById('offcanvasMenu');
  const closeMenu = document.getElementById('closeMenu');
  const header = document.querySelector('.main-header');
  

  let scrollPosition = 0;

  // Prevent duplicate listeners
  if (menuToggle.dataset.bound === "true") return;

  // Open menu instantly
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';

    offcanvasMenu.style.transition = 'none'; // remove animation
    offcanvasMenu.classList.add('active');
  });

  // Close menu
  closeMenu.addEventListener('click', () => {
    offcanvasMenu.classList.remove('active');

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

  // Mark as bound
  menuToggle.dataset.bound = "true";
}

