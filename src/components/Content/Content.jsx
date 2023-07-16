import { useRef } from "react";
import { getImages } from "../../helpers/img";
import Typed from "typed.js";
import "./Content.css";
import { useEffect } from "react";

export const Content = () => {
  const { js, php, py, react, cv } = getImages();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Desarrollador Web.",
        "Desarrollador Frontend.",
        "Desarrollador Backend.",
        "un apasionado.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content" id="home">
      <h1>Hola, soy Andrés Felipe</h1>
      <p>
        y soy <span ref={el}></span>
      </p>
      <div className="content__images">
        <img
          className="content__image"
          src={js}
          alt="tecnología"
          title="logo-tech"
          loading="lazy"
        />
        <img
          className="content__image"
          src={php}
          alt="tecnología"
          title="logo-tech"
          loading="lazy"
        />
        <img
          className="content__image"
          src={py}
          alt="tecnología"
          title="logo-tech"
          loading="lazy"
        />
        <img
          className="content__image"
          src={react}
          alt="tecnología"
          title="logo-tech"
          loading="lazy"
        />
      </div>
      <div className="content__btn">
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="CV.pdf"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};
