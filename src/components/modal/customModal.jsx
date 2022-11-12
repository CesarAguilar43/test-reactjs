import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewEmployee } from "../../features/employees";
import { MAX_LENGTH } from "../../utils/constants";
import registerSchema from "../../utils/registerSchema";
import CustomInput from "../customInput/customInput";
import { DateTime } from "../dateTime/dateTime";

export function CustomModal({ show, tittle, close }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegisterEmployee = (values) => {
    dispatch(addNewEmployee(values));
    close(true);
    navigate("/employees");
  };
  return (
    <>
      <Modal show={show} onHide={close} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>{tittle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleRegisterEmployee(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid }) => {
              return (
                <Form>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="firstNameID" className="form-label">
                        Nombre(s)
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Ingresar Nombre(s)"
                        maxLength={MAX_LENGTH + 1}
                        isPrevent={false}
                        component={CustomInput}
                        id="firstNameID"
                      />
                      <ErrorMessage
                        component="span"
                        name="firstName"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="firstNameID" className="form-label">
                        Apellido(s)
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Ingresar Apellido(s)"
                        maxLength={MAX_LENGTH + 1}
                        isPrevent={false}
                        component={CustomInput}
                        id="lastNameID"
                      />
                      <ErrorMessage
                        component="span"
                        name="lastName"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dateOfBirthID" className="form-label">
                        Fecha de Nacimiento (
                        <small className="text-muted">
                          Debes ser mayor de 18 años ...
                        </small>
                        )
                      </label>
                      <Field
                        name="dateOfBirth"
                        component={DateTime}
                        id="dateOfBirthID"
                      />

                      <ErrorMessage
                        name="dateOfBirth"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Enviar
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
