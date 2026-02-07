const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.pri-nav');
const navLinks = document.querySelectorAll('.nav-card');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');

  menuBtn.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  menuBtn.classList.toggle('is-open', isOpen);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('nav-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (e) => {
  if (
    nav.classList.contains('active') &&
    !nav.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    nav.classList.remove('active');
    document.body.classList.remove('nav-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
