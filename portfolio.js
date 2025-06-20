const filterBtns = document.querySelectorAll('.filter-btn');
const sliderContent = document.getElementById('sliderContent');
const allItems = [...sliderContent.children];
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');

let isExpanded = false;
let currentFilter = 'all';

function isMobile() {
  return window.innerWidth <= 768;
}

function getInitialItemCount() {
  return 3; // Mobile & Desktop: 3 items initially
}

function applyFilter(filter) {
  currentFilter = filter;
  isExpanded = false;

  // Filter button active class toggle
  filterBtns.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
  activeBtn?.classList.add('active');

  renderItems();
}

function renderItems() {
  sliderContent.innerHTML = '';

  const itemsToRender = currentFilter === 'all'
    ? allItems
    : allItems.filter(item => item.dataset.category === currentFilter);

  const initialCount = getInitialItemCount();

  if (!isExpanded) {
    itemsToRender.slice(0, initialCount).forEach(item => {
      sliderContent.appendChild(item.cloneNode(true));
    });
    loadMoreBtn.innerText = 'Load More';
  } else {
    itemsToRender.forEach(item => {
      sliderContent.appendChild(item.cloneNode(true));
    });
    loadMoreBtn.innerText = 'Load Less';
  }

  loadMoreContainer.style.display = itemsToRender.length > initialCount ? 'block' : 'none';
}

loadMoreBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  renderItems();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    applyFilter(filter);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  applyFilter('all');
});
