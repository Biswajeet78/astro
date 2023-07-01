// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Perform form validation and submission logic here
    // For the sake of simplicity, we'll just log the form data to the console
    const formData = new FormData(this);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
  
    // Reset form fields
    form.reset();
  });
  