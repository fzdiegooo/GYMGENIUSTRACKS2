document.addEventListener("DOMContentLoaded", (event) => {
  const btnLogout = document.getElementById("btn-logout");

  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); 
    window.location.href = "/"; 
  });

  const token = localStorage.getItem("token");
  if (token) {
    const tokenData = parseJwt(token);
    if (Date.now() >= tokenData.exp * 1000) {
      // Token ha expirado
      alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
      localStorage.removeItem("token");
      localStorage.removeItem('user')
      window.location.href = "/";
    } else {
      const expirationTime = tokenData.exp * 1000 - Date.now();

      setTimeout(() => {
        alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
        localStorage.removeItem("token");
        window.location.href = "/";
      }, expirationTime);
    }
  } else {
    window.location.href = "/";
  }
});

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
