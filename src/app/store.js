import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import employeesReducer from "../features/employees/employeesSlice";
import imagesReducer from "../features/images/imagesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    employees: employeesReducer,
    images: imagesReducer,
  },
});
export default store;
