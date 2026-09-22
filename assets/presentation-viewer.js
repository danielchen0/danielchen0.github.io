(function () {
  const viewer = document.querySelector("[data-presentation-viewer]");
  if (!viewer) {
    return;
  }

  const image = viewer.querySelector("[data-slide-image]");
  const currentLabel = viewer.querySelector("[data-current-slide]");
  const totalLabel = viewer.querySelector("[data-total-slides]");
  const previousButton = viewer.querySelector("[data-slide-previous]");
  const nextButton = viewer.querySelector("[data-slide-next]");
  const count = Number(viewer.dataset.slideCount || 1);
  const prefix = viewer.dataset.slidePrefix || "";
  const title = viewer.dataset.slideTitle || "Presentation";
  let current = 1;

  function slidePath(index) {
    return `${prefix}${String(index).padStart(2, "0")}.png`;
  }

  function show(index) {
    current = Math.min(Math.max(index, 1), count);
    image.src = slidePath(current);
    image.alt = `${title} slide ${current}`;
    currentLabel.textContent = String(current);
    previousButton.disabled = current === 1;
    nextButton.disabled = current === count;
    if (window.location.hash !== `#${current}`) {
      window.history.replaceState(null, "", `#${current}`);
    }
  }

  function advance(delta) {
    show(current + delta);
  }

  previousButton.addEventListener("click", function () {
    advance(-1);
  });

  nextButton.addEventListener("click", function () {
    advance(1);
  });

  image.addEventListener("click", function () {
    advance(1);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      advance(-1);
    } else if (event.key === "ArrowRight" || event.key === " ") {
      event.preventDefault();
      advance(1);
    }
  });

  totalLabel.textContent = String(count);
  const initial = Number(window.location.hash.replace("#", ""));
  show(Number.isFinite(initial) && initial > 0 ? initial : 1);
})();
