function initsfspopsbvs() {
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
}