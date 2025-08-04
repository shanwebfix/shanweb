// Footer Up Arrow
function initft() {
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

  document.addEventListener("contextmenu", (e) => e.preventDefault());}