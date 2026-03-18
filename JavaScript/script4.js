const images = [
      document.getElementById("image0"),
      document.getElementById("image1"),
      document.getElementById("image2"),
    ];
    const captions = ["Some Flowers For You", "I &lt;3 You Card", "Hehe"];
    let current = 0;

    function showImage(n) {
      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === n);
      });
      document.getElementById("carousel-caption").innerHTML = captions[n];
      current = n;
    }
    function prevImage() {
      showImage((current + images.length - 1) % images.length);
    }
    function nextImage() {
      showImage((current + 1) % images.length);
    }
    // Ensure the correct caption/image set initially
    showImage(0);

    function navigateWithFade(url) {
      document.body.style.transition = "opacity 0.7s ease";
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = url;
      }, 700);
    }

    document.getElementById("btnBack").addEventListener("click", () => {
      navigateWithFade("ThisIsForYou.html");
    });

    document.getElementById("btnNext").addEventListener("click", () => {
      navigateWithFade("SongDedicatedToYou.html");
    });