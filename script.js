document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "⚠️ Something went wrong. Try again later.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error. Please try again.";
      status.style.color = "red";
    }
  });
});
