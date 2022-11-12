import { useSelector } from "react-redux";
import {
  HashRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes/protectedRoutes";
import Employees from "../pages/employees";
import Login from "../pages/login";
import Upload from "../pages/upload";

export default function Routes() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="*"
          element={isAuth ? <Navigate to="/employees" /> : <Navigate to="/" />}
        />
        <Route index exact path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/employees" element={<Employees />} />
          <Route exact path="/upload" element={<Upload />} />
        </Route>
      </Switch>
    </HashRouter>
  );
}
