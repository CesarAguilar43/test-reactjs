import axios from "axios";

export const employeeApi = axios.create({
  baseURL:
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees",
});
