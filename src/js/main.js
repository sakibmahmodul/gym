const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
}
);
// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link =>  {
    link.addEventListener("click", () => {
        navToggle.classList.remove('active')
        navLinks.classList.remove('active')
    })
})
// Navigation bar scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
);
// Add background color to the navbar on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});