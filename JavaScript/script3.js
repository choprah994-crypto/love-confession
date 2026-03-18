const fadeDuration = 700;
    function navigateWithFade(url) {
      document.body.classList.add("fadeout");
      setTimeout(() => {
        window.location.href = url;
      }, fadeDuration);
    }

    document.getElementById("nextButton").addEventListener("click", () => {
      navigateWithFade("SpecialCard.html");
    });

    document.getElementById("backButton").addEventListener("click", () => {
      navigateWithFade("loveindex.html");
    });