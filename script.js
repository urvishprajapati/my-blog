// Get the menu toggle button, navigation links, and all sections
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-menu'); // Updated to use the new ID
const menuItems = document.querySelectorAll('.nav-links a');

// Toggle the 'show' class on the navigation links when the hamburger button is clicked
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Show or hide the menu
  
  // Change the text of the menu toggle button based on the menu state
  if (navLinks.classList.contains('show')) {
    menuToggle.querySelector('button').textContent = 'Close Menu'; // Change text when menu is open
  } else {
    menuToggle.querySelector('button').textContent = '☰'; // Default hamburger icon when menu is closed
  }
});

// Scroll to the respective section when a menu item is clicked
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Close the menu after selecting a section on mobile
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show'); // Hide the menu after selection
      menuToggle.querySelector('button').textContent = '☰'; // Reset the toggle button text back to hamburger
    }
  });
});

// Automatically close the navigation menu when resizing to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show'); // Hide the menu on larger screens
    menuToggle.querySelector('button').textContent = '☰'; // Reset the toggle button text
  }
});

// Select all Read More buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const postCard = e.target.closest('.post-card'); // Get the parent post-card
    const hiddenContent = postCard.querySelector('.post-hidden-content'); // Find the hidden content

    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
      hiddenContent.style.display = 'inline'; // Show hidden content
      e.target.textContent = 'Read Less'; // Change button text
    } else {
      hiddenContent.style.display = 'none'; // Hide content
      e.target.textContent = 'Read More'; // Revert button text
    }
  });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});
