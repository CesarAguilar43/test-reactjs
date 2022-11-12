import * as Yup from "yup";
import { MAX_LENGTH, MIN_LENGTH } from "./constants";
import { dobMax, dobMin, parseDateString } from "./convertTo";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(MIN_LENGTH, "Mínimo de 3 caracteres es requerido")
    .max(MAX_LENGTH, "Maximo de 30 caracteres es requerido")
    .required("Este campo es requerido"),
  lastName: Yup.string()
    .min(MIN_LENGTH, "Mínimo de 3 caracteres es requerido")
    .max(MAX_LENGTH, "Maximo de 30 caracteres es requerido")
    .required("Este campo es requerido"),
  dateOfBirth: Yup.date("Por favor ingrese una fecha valida")
    .transform(parseDateString)
    .min(dobMax, "Edad maxima es 120 años")
    .max(dobMin, "Edad minima es 18 años")
    .required("Por favor ingresa tu fecha de nacimiento"),
});
export default registerSchema;
