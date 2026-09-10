function toggleMenu(id) {
  const menu = document.getElementById(id);
  const isOpen = menu.classList.contains('open');
  document.querySelectorAll('.choice-menu.open').forEach(m => m.classList.remove('open'));
  if (!isOpen) menu.classList.add('open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.link-btn-wrapper')) {
    document.querySelectorAll('.choice-menu.open').forEach(m => m.classList.remove('open'));
  }
});