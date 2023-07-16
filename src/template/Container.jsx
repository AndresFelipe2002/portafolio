import "./Container.css";

export const Container = ({ children, id }) => {
  return (
    <section id={id} className="container-page" data-scroll-spy>
      {children}
    </section>
  );
};
