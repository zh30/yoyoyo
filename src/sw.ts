const init = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/assets/js/sw.js", { scope: "./" })
        .then((registration) => {
          console.log("SW 已经注册成功: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW 注册失败: ", registrationError);
        });
    });
  }
};

export default init;
