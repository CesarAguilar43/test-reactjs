import { Button, Container, Alert, Row, Col } from "react-bootstrap";
import Layout from "../container/layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../utils/loginSchema";
import dummyData from "../app.json";
import "../container/global/layout.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/customInput/customInput";

export default function Login() {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = ({ email, password }) => {
    if (
      email !== dummyData.user.email ||
      password !== dummyData.user.password
    ) {
      setFlag(true);
      setTimeout(() => setFlag(false), 3000);
    } else {
      dispatch(login());
      navigate("/employees");
    }
  };

  return (
    <Layout>
      <Container>
        {flag ? (
          <Alert key="danger" variant="danger">
            El correo y/o contraseña son incorrectos. Vuelva a intentarlo...
          </Alert>
        ) : null}
        <Row>
          <Col xs={12} lg={12}>
            <h3>Iniciar Sesion</h3>
          </Col>
          <Col xs={12} lg={4} className="figure">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleLogin(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, isValid }) => {
                return (
                  <Form className="margin-bottom-2">
                    <Row>
                      <Col xs={12} lg={12} className="mb-3">
                        <label
                          htmlFor="email"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Ingresar Usuario"
                          component={CustomInput}
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="text-danger"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={12} className="mb-3">
                        <label
                          htmlFor="password"
                          className="col-sm col-form-label"
                        >
                          Contraseña
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Ingresar Contraseña"
                          component={CustomInput}
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="text-danger"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={12} className="mt-3">
                        <Button
                          className="col-12"
                          type="submit"
                          variant="outline-primary"
                          size="lg"
                          disabled={isAuth || !isValid}
                        >
                          Ingresar
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
