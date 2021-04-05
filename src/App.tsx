import React, { useState } from "react";
import "./testimonials-css/mobile.scss";
import "./testimonials-css/desktop.scss";
import "./testimonials-css/desktop.scss";

// import images
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
function App() {
  const [slide, setSlide] = useState(true);

  const sliderLogic = (
    slide: boolean,
    setSlide: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setSlide(!slide);
    console.log(slide);
  };
  return (
    <>
      {/* add tags inside the main tag */}

      <article className={slide ? `testimonial ` : "slider testimonial "}>
        <header className="testimonial__header">
          <img
            src={tanya}
            alt="portrait of Tanya Sinclair"
            className="testimonial__img"
          />
          <div className="testimonial__slider-control">
            <button
              className="testimonial__prev testimonial__slide-control-button"
              onClick={() => sliderLogic(slide, setSlide)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </button>
            <button
              className="testimonial__next testimonial__slide-control-button"
              onClick={() => sliderLogic(slide, setSlide)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </header>
        <p className="testimonial__message">
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <footer className="testimonial__footer">
          <p className="testimonial__name">Tanya Sinclair</p>
          <p className="testimonial__degree">UX Engineer</p>
        </footer>
      </article>
      <article className={slide ? "slider testimonial " : `testimonial `}>
        <header className="testimonial__header">
          <img
            src={john}
            alt="Portrait of John Tarkpor"
            className="testimonial__img"
          />
          <div className="testimonial__slider-control">
            <button
              className="testimonial__prev testimonial__slide-control-button"
              onClick={() => sliderLogic(slide, setSlide)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </button>
            <button
              className="testimonial__next testimonial__slide-control-button"
              onClick={() => sliderLogic(slide, setSlide)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </header>

        <p className="testimonial__message">
          “ If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </p>

        <footer className="testimonial__footer">
          <p className="testimonial__name">John Tarkpor</p>
          <p className="testimonial__degree">Junior Front-end Developer</p>
        </footer>
      </article>
    </>
  );
}

export default App;
