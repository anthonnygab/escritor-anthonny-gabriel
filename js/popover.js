function openPopover(id) {
  // Fecha todos os popovers
  const popovers = document.querySelectorAll('.popoverText');
  popovers.forEach(p => {
    if (p.dataset.id === id) {
      // Alterna o popover clicado
      const isVisible = p.classList.contains('show');
      p.classList.toggle('show', !isVisible);
      p.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
      if (!isVisible) {
        p.focus();
      }
    } else {
      p.classList.remove('show');
      p.setAttribute('aria-hidden', 'true');
    }
  });
}

// Fecha popover se clicar fora
document.addEventListener('click', (event) => {
  const isButton = event.target.closest('.btn-about');
  const isPopover = event.target.closest('.popoverText');
  if (!isButton && !isPopover) {
    document.querySelectorAll('.popoverText.show').forEach(popover => {
      popover.classList.remove('show');
      popover.setAttribute('aria-hidden', 'true');
    });
  }
});