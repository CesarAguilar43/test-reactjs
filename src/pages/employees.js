import Layout from "../container/layout";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "../container/global/employees.css";
import { Alert, Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import moment from "moment";
import { convertText } from "../utils/convertTo";
import { CustomModal } from "../components/modal/customModal";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../features/employees";

export default function Employees() {
  const [searchData, setSearchData] = useState("");
  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);
  const { loading, employees, error, errors } = useSelector(
    (state) => state.employees
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <Layout>
      <Container>
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" className="spinner" role="status" />
            <span> Cargando...</span>
          </div>
        ) : error ? (
          <Alert key="danger" variant="warning">
            Hubo un error de tipo:<strong>{errors}</strong>
          </Alert>
        ) : (
          <div>
            <Row>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Buscar empleado..."
                  onChange={handleSearch}
                />
              </div>
              <div className="col-auto">
                <Button
                  onClick={handleModal}
                  variant="outline-primary"
                  className="mb-3"
                >
                  Registrar
                </Button>
              </div>
            </Row>
            <Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre(s)</th>
                    <th>Apellidos(s)</th>
                    <th>Fecha de nacimiento</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ...employees
                      .filter(({ name }) => {
                        let employee = convertText(name);
                        return employee.includes(searchData.toLowerCase());
                      })
                      .map(({ id, last_name, name, birthday }) => {
                        return (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>{last_name}</td>
                            <td>{name}</td>
                            <td>{moment(birthday).format("YYYY-MM-DD")}</td>
                          </tr>
                        );
                      }),
                  ]}
                </tbody>
              </Table>
            </Row>
          </div>
        )}
        <CustomModal
          show={show}
          close={handleClose}
          tittle="Registrar empleado"
        />
      </Container>
    </Layout>
  );
}
