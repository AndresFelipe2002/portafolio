import { useForm } from "../../hooks/useForm";
import "./Form.css";

export const Form = () => {
    
  const { formik } = useForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form"
      noValidate
      autoComplete="off"
    >
      <div className="form__content">
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="full-name">Nombre Completo:</label>
            <input
              type="text"
              id="full-name"
              placeholder="Ingresa nombre completo"
              className="form-control"
              name="user_full_name"
              onChange={formik.handleChange}
              value={formik.values.user_full_name}
            />
            {formik.touched.user_full_name && formik.errors.user_full_name ? (
              <span className="error">{formik.errors.user_full_name}</span>
            ) : null}
          </div>

          <div className="col-md-4">
            <label htmlFor="email">Correo electronico:</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa el correo electrónico"
              className="form-control"
              name="user_email"
              onChange={formik.handleChange}
              value={formik.values.user_email}
            />
            {formik.touched.user_email && formik.errors.user_email ? (
              <span className="error">{formik.errors.user_email}</span>
            ) : null}
          </div>

          <div className="col-md-4">
            <label htmlFor="number-mobile">Número de telefono:</label>
            <input
              type="text"
              id="number-mobile"
              placeholder="Ingresa el número de teléfono"
              className="form-control"
              name="user_phone_number"
              onChange={formik.handleChange}
              value={formik.values.user_phone_number}
            />
            {formik.touched.user_phone_number &&
            formik.errors.user_phone_number ? (
              <span className="error">{formik.errors.user_phone_number}</span>
            ) : null}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Tú mensaje..."
              className="form-control"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <span className="error">{formik.errors.message}</span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </form>
  );
};
