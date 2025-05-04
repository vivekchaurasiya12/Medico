function showSection(sectionId) {
    document.querySelectorAll('.section').forEach((sec) => {
      sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  function openForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdorQu7Ub9J8LnHZbgHtN7TkRfkYQ9DFP8FxqmSRWNSnwhNlA/viewform?usp=dialog ", "_blank");
  }
  