import { getImages } from "../../helpers/img";
import { Container } from "../../template/Container";
import { Card } from "../Card/Card";
import { Timeline } from "../Timeline/Timeline";
import { Form } from "../Form/Form";
import "./Body.css";

export const Body = () => {
  const { logo, pokedex, blogCafe, banca, form } = getImages();

  return (
    <>
      <Container id="about">
        <div className="body__content" id="about">
          <div className="body__logo">
            <img src={logo} alt="perfil" title="logo" loading="lazy" />
          </div>
          <div className="body__description">
            <h2>Acerca de mí</h2>
            <p>
              Hola, mi nombre es Andres Felipe Pérez Urriago, tengo 20 años y
              vivo en la ciudad de Palmira, valle de cauca. Soy egresado del
              Centro de Biotecnología Industrial <b>(CBI)</b> <b>SENA</b> -
              Palmira, del programa de formación Análisis y Desarrollo de
              Sistemas de información.
            </p>
          </div>
        </div>
      </Container>

      <Container id="skills">
        <div className="body__skill" id="skills">
          <h2>Mis Habilidades</h2>
          <Timeline />
        </div>
      </Container>

      <Container id="projects">
        <div className="body__project" id="projects">
          <h2>Proyectos</h2>
          <div className="card__container">
            <Card
              img={pokedex}
              title="Pokédex"
              url="https://vigilant-newton-ab82cb.netlify.app/"
              description="La pokédex fue mí primer proyecto creado con la librería de react con la intensión de consumir una API de los pokemones. Este proyecto fue realizado en el CBI (Centro de Biotecnología Industrial - SENA) como aprendizaje de uso de hooks y la diversidad de esta librería mencionada."
            />
            <Card
              img={blogCafe}
              title="BlogCafé"
              url="https://coffeblog-byandres.netlify.app/"
              description="El blog de café es un proyecto de aprendizaje derivado de un curso, realizado con el  lenguaje de programación Php, con la única intensionalidad de potenciar mis conocimientos en dicho lenguaje."
            />
            <Card
              img={banca}
              title="Banca4.0"
              url="https://simulador2022.000webhostapp.com/"
              description="Banca 4.0 fue un proyecto suministrado por el SENA con la finalidad de brindar al programar de formación de gestión bancaria el poder simular los procesos internos dentro de un banco, esto con el fin de que los aprendices, mejoren su capacidad de llevar acabo dichos procesos y salir al mercado laboral bien preparados. Este proyecto fue desarrollado por un grupo de 4 personas."
            />
            <Card
              img={form}
              title="Formularios para estudiantes"
              url="https://nifty-thompson-9f4cd7.netlify.app/"
              description="El formulario de estudiantes es un proyecto de los procesos de una CRUD (Create, Read, Update, Delete). Este proyecto fue realizado con react y firebase con la intensión de aprendizaje dentro del SENA."
            />
          </div>
        </div>
      </Container>

      <Container id="contact">
        <div className="body__contact" id="contact">
          <h2>Contactar</h2>
          <Form />
        </div>
      </Container>
    </>
  );
};
