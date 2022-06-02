const overlay = document.getElementById("lightbox-overlay");
const images = document.querySelectorAll(".content > img");
const fullImage = document.getElementById("full-image");
console.log(fullImage);

images.forEach((images) => {
  images.addEventListener("click", () => {
    // overlay.classList.remove('card');
    overlay.classList.add("active");

    let target = images.target,
      targetId = images.getAttribute("src");
    console.log(targetId);
    fullImage.src = targetId;

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      // overlay.classList.add('card');
    });
  });
});

console.log(images);
console.log(overlay);
console.log("connected");
