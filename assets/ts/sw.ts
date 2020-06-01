const init = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/assets/js/sw.js", { scope: "./" })
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
};

export default init;
