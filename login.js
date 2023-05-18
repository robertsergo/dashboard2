document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Vérification des identifiants
    if (username === "admin" && password === "admin") {
     // document.getElementById("message").textContent = "Connexion réussie!";
     window.location.href = "index.html"; // Redirection vers la page d'accueil
    } else {
      document.getElementById("message").textContent = "Identifiants incorrects!";
    }
  });
  