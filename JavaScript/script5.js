const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const seekSlider = document.getElementById("seek-slider");
    const curTimeLabel = document.getElementById("current-time");
    const durTimeLabel = document.getElementById("duration-time");
    const statusText = document.getElementById("status-text-value");
    let isPlaying = false;

    function formatTime(sec) {
      sec = Math.floor(sec);
      let m = Math.floor(sec / 60);
      let s = sec % 60;
      return `${m}:${s < 10 ? "0" : ""}${s}`;
    }

    audio.addEventListener("loadedmetadata", () => {
      durTimeLabel.textContent = formatTime(audio.duration);
      seekSlider.max = Math.floor(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      seekSlider.value = Math.floor(audio.currentTime);
      curTimeLabel.textContent = formatTime(audio.currentTime);
    });

    seekSlider.addEventListener("input", () => {
      audio.currentTime = seekSlider.value;
      curTimeLabel.textContent = formatTime(audio.currentTime);
    });

    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        playBtn.innerHTML = "&#10073;&#10073;"; // Pause icon
        statusText.innerHTML =
          '<span style="font-size:1.3em;">&#127925;</span> PLAYING <span style="font-size:1.3em;">&#127925;</span>';
        isPlaying = true;
      } else {
        audio.pause();
        playBtn.innerHTML = "&#9654;"; // Play icon
        statusText.textContent = "PAUSED";
        isPlaying = false;
      }
    });

    audio.addEventListener("ended", () => {
      playBtn.innerHTML = "&#9654;";
      statusText.textContent = "PAUSED";
      isPlaying = false;
      audio.currentTime = 0;
      seekSlider.value = 0;
      curTimeLabel.textContent = formatTime(0);
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
      audio.currentTime = 0;
      audio.pause();
      playBtn.innerHTML = "&#9654;";
      statusText.textContent = "PAUSED";
      isPlaying = false;
      seekSlider.value = 0;
      curTimeLabel.textContent = formatTime(0);
    });

    document.getElementById("next-btn").addEventListener("click", () => {
      audio.currentTime = audio.duration;
      audio.pause();
      playBtn.innerHTML = "&#9654;";
      statusText.textContent = "PAUSED";
      isPlaying = false;
      seekSlider.value = seekSlider.max;
      curTimeLabel.textContent = formatTime(audio.duration);
    });

    // Smooth navigate on Back and Next buttons
    function navigateWithFade(url) {
      document.body.classList.add("fadeout");
      setTimeout(() => {
        window.location.href = url;
      }, 700);
    }

    document.getElementById("backBtn").addEventListener("click", () => {
      navigateWithFade("SpecialCard.html");
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      navigateWithFade("ThankYouCard.html");
    });