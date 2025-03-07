document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      
      if (name === "" || email === "" || password === "") {
        alert("All fields are required to ascend.");
        return;
      }
  
      alert(`Welcome, ${name}. Your journey into the darkness begins...`);
      form.reset();
    });
  });
  