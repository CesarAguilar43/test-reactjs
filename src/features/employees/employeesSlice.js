import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  employees: [],
  error: false,
  errors: "",
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    setEmployees: (state, action) => {
      state.loading = false;
      state.employees = action.payload.employees;
      state.error = false;
    },
    isError: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errors = action.payload.errors;
    },
    setNewEmployee: (state, action) => {
      state.loading = false;
    },
  },
});

export const { startLoading, setEmployees, setNewEmployee, isError } =
  employeesSlice.actions;
export default employeesSlice.reducer;
