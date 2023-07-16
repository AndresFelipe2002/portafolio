import { useEffect, useRef } from "react";
import "./ButtonUp.css";

export const ButtonUp = () => {
  const btnUp = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 920) {
        btnUp.current.style.display = "block";
      } else {
        btnUp.current.style.display = "none";
      }
    });
  }, []);

  return (
    <div ref={btnUp} className="btn-up" style={{ display: "none" }}>
      <a href="#home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fillRule="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </a>
    </div>
  );
};
