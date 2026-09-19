'use strict';

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
const status = document.getElementById('menu-status');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    cards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) count += 1;
    });
    status.textContent = `${count} ${category === 'all' ? 'menu' : category} ${count === 1 ? 'item' : 'items'} shown.`;
  });
});
