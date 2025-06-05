const getRandomNumber = (start: number, end: number): number => {
  return Math.round(start + Math.random() * (end - start));
};

function getRandomHexValue() {
  const rValue = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, "0");
  const gValue = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, "0");
  const bValue = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, "0");
  return `#${rValue}${gValue}${bValue}`;
}

function getRandomGrayHex() {
  const gray = Math.floor(100 + Math.random() * 100) // 0–255
    .toString(16)
    .padStart(2, "0");
  return `#${gray}${gray}${gray}`;
}
// scaleInOnView.ts
function observeScaleInOnView(selector = ".image-box") {
  const boxes = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            (entry.target as HTMLElement).style.transform = "scale(1.2)";
            const parentImageFrame =
              (entry.target as HTMLElement).parentElement || {};
            (parentImageFrame as HTMLElement).style.opacity = "1";
            (parentImageFrame as HTMLElement).style.transform =
              "rotateX(0deg) rotateY(0deg)";
          }, 100);
          observer.unobserve(entry.target); // Optional: observe only once
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% visible
    }
  );

  boxes.forEach((box) => observer.observe(box));
}

export {
  observeScaleInOnView,
  getRandomNumber,
  getRandomHexValue,
  getRandomGrayHex,
};
