const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusText.textContent = "Thanks for reaching out. We will contact you soon.";
    form.reset();
  });
}
