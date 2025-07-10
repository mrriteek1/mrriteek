function loginUser() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();

  // Admin Login
  if (email === "mrriteek8225@gmail.com" && pass === "Ranjali@@22334477") {
    window.location.href = "admin.html";
  }
  // User Login
  else if (email !== "" && pass !== "") {
    localStorage.setItem("wallet", "₹25");
    localStorage.setItem("prime", "25"); // days left
    window.location.href = "dashboard.html";
  }
  else {
    alert("❌ Please enter valid login details");
  }
}