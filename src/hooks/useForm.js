import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, { send } from "@emailjs/browser";
import Swal from "sweetalert2";

export const useForm = () => {
  const SignupSchema = Yup.object().shape({
    user_full_name: Yup.string()
      .min(2, "Demasiado corto!")
      .max(50, "Demasiado Largo!")
      .required("Este campo es requerido"),
    user_email: Yup.string()
      .email("Email invalido")
      .required("Este campo es requerido"),
    user_phone_number: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Número de teléfono invalido"
      )
      .min(10, "Demasiado corto")
      .max(10, "Demasiado largo")
      .required("Este campo es requerido"),
    message: Yup.string()
      .min(2, "Demasiado corto!")
      .max(1000, "Demasiado largo!")
      .required("Este campo es requerido"),
  });

  const sendEmail = async (dataForm) => {
    try {
      await emailjs.send(
        "service_8q16j1b",
        "template_21ofc2l",
        dataForm,
        "97RFU5BcKvguSzR38"
      );
      Swal.fire({
        icon: "success",
        title: "Se ha enviado correctamente!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      user_full_name: "",
      user_email: "",
      user_phone_number: "",
      message: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      resetForm({ values: "" });
    },
  });

  return {
    formik,
  };
};
