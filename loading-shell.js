document.documentElement.classList.add("app-loading");
window.addEventListener("error", function (event) {
  if (event.target instanceof HTMLScriptElement) {
    document.documentElement.classList.remove("app-loading");
  }
}, true);
