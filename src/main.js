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