import Slide from "./slide";

const gallery = [
  "https://images.pexels.com/photos/3225524/pexels-photo-3225524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500",
  "https://images.pexels.com/photos/3512846/pexels-photo-3512846.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2766915/pexels-photo-2766915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const slider = {
  container: document.querySelector(".slider-container"),
  nav_prev: document.querySelector(".slider-nav__prev"),
  nav_next: document.querySelector(".slider-nav__next")
};

const width = slider.container.offsetWidth;

export default function App() {
  let counter = 0;

  const clickLeft = () => {
    slider.nav_prev.addEventListener("click", () => {
      if (counter !== 0) {
        counter--;
      } else {
        counter = gallery.length - 1;
      }

      slider.container.style.transform =
        "translateX(" + -width * counter + "px)";
    });
  };

  const clickRight = () => {
    slider.nav_next.addEventListener("click", () => {
      if (counter < gallery.length - 1) {
        counter++;
      } else {
        counter = 0;
      }

      slider.container.style.transform =
        "translateX(" + -width * counter + "px)";
    });
  };

  const createSlider = (slides) => {
    clickLeft();
    clickRight();

    return slides.map((slide, index) => {
      return index !== counter
        ? Slide(slide, index)
        : Slide(slide, index, "active");
    });
  };

  return createSlider(gallery);
}
