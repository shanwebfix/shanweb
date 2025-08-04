function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sliderContent = document.getElementById('sliderContent');
  const allItems = [...sliderContent.children];
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreContainer = document.getElementById('loadMoreContainer');

  let currentFilter = 'all';
  let visibleCount = 3;
  const increment = 3;

  function getFilteredItems() {
    return currentFilter === 'all'
      ? allItems
      : allItems.filter(item => item.dataset.category === currentFilter);
  }

  function renderItems() {
    const items = getFilteredItems();
    sliderContent.innerHTML = '';

    items.slice(0, visibleCount).forEach(item => {
      sliderContent.appendChild(item.cloneNode(true));
    });

    if (visibleCount >= items.length) {
      loadMoreBtn.innerText = 'Load Less';
    } else {
      loadMoreBtn.innerText = 'Load More';
    }

    loadMoreContainer.style.display = items.length > increment ? 'block' : 'none';
  }

  function applyFilter(filter) {
    currentFilter = filter;
    visibleCount = increment;

    filterBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    activeBtn?.classList.add('active');

    renderItems();
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      const items = getFilteredItems();

      if (visibleCount >= items.length) {
        visibleCount = increment;
      } else {
        visibleCount += increment;
      }

      renderItems();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyFilter(btn.dataset.filter);
    });
  });

  // Initial render
  applyFilter('all');
}
