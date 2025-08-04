
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 2000); // 2 sec delay
  });

