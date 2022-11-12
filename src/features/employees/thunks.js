import { employeeApi } from "../../api";
import {
  isError,
  setEmployees,
  setNewEmployee,
  startLoading,
} from "./employeesSlice";

export const getEmployees = () => {
  const page = 1;
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const { data } = await employeeApi.get(
        `/:CesarAlejandroAguilarRodriguez`,
        { params: { page, limit: 5 } }
      );
      dispatch(setEmployees({ employees: data.data.employees }));
    } catch (error) {
      dispatch(isError({ errors: error.code }));
    }
  };
};

export const addNewEmployee = ({ firstName, lastName, dateOfBirth }) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    await employeeApi.post(`/:CesarAlejandroAguilarRodriguez`, {
      name: firstName,
      last_name: lastName,
      birthday: dateOfBirth,
    });
    dispatch(setNewEmployee());
  };
};
