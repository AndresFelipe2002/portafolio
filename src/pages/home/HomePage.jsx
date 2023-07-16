import { Container } from "../../template/Container";
import { Body } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { Content } from "../../components/Content/Content";
import { ButtonUp } from "../../components/Button-up/ButtonUp";

export const HomePage = () => {
  return (
    <>
      <Container id="home">
        <Navbar />
        <Content />
      </Container>
      <Body />
      <Footer />
      <ButtonUp />
    </>
  );
};
