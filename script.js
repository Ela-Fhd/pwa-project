let deferredPrompt;
let installBtn = document.querySelector(".install-btn");
let installBanerWrapper = document.querySelector(".install-baner-wrapper");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBanerWrapper.style.display = "flex";
  return false;
});

installBtn.addEventListener("click", () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "dismissed") {
      } else {
        installBanerWrapper.style.display = "none";
      }
    });
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => {})
      .catch(() => {});
  });
}
