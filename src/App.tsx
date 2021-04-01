import React from "react";
import "./testimonials-css/mobile.scss";
import "./testimonials-css/desktop.scss";

// import svgs
import { ReactComponent as IconNext } from "./images/icon-next.svg";
import { ReactComponent as InconPrev } from "./images/icon-prev.svg";
import { ReactComponent as PatternBg } from "./images/pattern-bg.svg";
import { ReactComponent as PatternCurve } from "./images/pattern-curve.svg";
import { ReactComponent as PatternQuotes } from "./images/pattern-quotes.svg";

function App() {
  return (
    <>
      {/* add tags inside the main tag */}
      <PatternBg className="page__pattern-bg" />
      <PatternQuotes className="page__pattern-quotes" />
      <PatternCurve className="page__pattern-curve" />

      <article className="testimonials">
        <header></header>
      </article>
    </>
  );
}

export default App;
