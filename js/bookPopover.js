function sinopse(id) {
  // Fecha todos os popovers abertos, exceto o atual
  document.querySelectorAll('.popoverBook').forEach(pop => {
    if (pop.dataset.id !== id) {
      pop.classList.remove('show');
      pop.setAttribute('aria-hidden', 'true');
    }
  });

  const popover = document.querySelector(`.popoverBook[data-id="${id}"]`);

  if (popover) {
    const isVisible = popover.classList.contains('show');
    if (isVisible) {
      popover.classList.remove('show');
      popover.setAttribute('aria-hidden', 'true');
    } else {
      popover.classList.add('show');
      popover.setAttribute('aria-hidden', 'false');
      popover.focus();
    }
  }
}

// Fecha o popover ao clicar fora
document.addEventListener('click', function (e) {
  const isButton = e.target.classList.contains('sinopseBtn');
  const isPopover = e.target.closest('.popoverBook');

  if (!isButton && !isPopover) {
    document.querySelectorAll('.popoverBook').forEach(pop => {
      pop.classList.remove('show');
      pop.setAttribute('aria-hidden', 'true');
    });
  }
});
