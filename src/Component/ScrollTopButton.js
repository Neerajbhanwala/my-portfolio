import React, { useEffect, useState } from "react";
import "../Style/ScrollTopButton.css";
import { RiArrowUpSFill } from "react-icons/ri";

function ScrollTopButton() {
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 500) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  function scrollHandler() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {scrollBtn ? (
        <button className="scrollButton" onClick={scrollHandler}>
          <RiArrowUpSFill />
        </button>
      ) : null}
    </>
  );
}

export default ScrollTopButton;
