const container = document.querySelector(".container");
let isScrolling = false;
let PreviousPageX = 0,
  PreviousScrollLeft = 0;

container.addEventListener("mousedown", (event) => {
  isScrolling = true;
  PreviousPageX = event.pageX;
  PreviousScrollLeft = container.scrollLeft;
});
container.addEventListener("mouseup", (event) => {
  isScrolling = false;
});

container.addEventListener("mousemove", (event) => {
  let PositionDifference = event.pageX - PreviousPageX;
  if (isScrolling) {
    container.scrollLeft = PreviousScrollLeft - PositionDifference * 0.8;
  }
});

container.addEventListener("touchstart", (event) => {
  isScrolling = true;
  previousPageX = event.touches[0].pageX;
  previousScrollLeft = container.scrollLeft;
});

container.addEventListener("touchend", () => {
  isScrolling = false;
});

container.addEventListener("touchmove", (event) => {
  let positionDifference = event.touches[0].pageX - previousPageX;
  if (isScrolling) {
    container.scrollLeft = previousScrollLeft - positionDifference * 0.5;
  }
});
