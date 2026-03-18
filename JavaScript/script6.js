const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", () => {
      document.body.classList.add("fadeout");
      setTimeout(() => {
        window.location.href = "SongDedicatedToYou.html";
      }, 700);
    });