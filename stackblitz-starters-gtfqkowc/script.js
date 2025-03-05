animateButton.addEventListener('click', () => {
  box.classList.add('animate');
  setTimeout(() => {
    box.classList.remove('animate');
  }, 2000); // Длительность анимации
});
