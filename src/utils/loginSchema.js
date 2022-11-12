import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor ingresa un correo válido")
    .required("El correo es requerido"),
  password: Yup.string().required("El password es requerido"),
});
export default loginSchema;
