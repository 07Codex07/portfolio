const glow = document.querySelector('.glow-background');

document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const magnets = document.querySelectorAll('.magnetic');

magnets.forEach((magnet) => {
  const parent = magnet.closest('.magnetic-wrap');

  parent.addEventListener('mousemove', (e) => {
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    magnet.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  parent.addEventListener('mouseleave', () => {
    magnet.style.transform = 'translate(0, 0)';
  });
});
