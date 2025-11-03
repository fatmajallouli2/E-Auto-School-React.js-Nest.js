import React from "react";
import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Container,Row,Col} from "reactstrap";
import UserHeader from "./UserHeader";

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: 10,
      username: "",
      firstName: "",
      lastName: "",
      cin: "",
      phoneNumber: "",
      birthdate: "",
      password: "",
      email: "",
      adress: "",
    };
  }
  
  update = (id, C, E, P, L, F, B, PO, A, U) => {
    axios.put(`http://localhost:8000/person/${id}`, {
      cin: C,
      email: E,
      password: P,
      lastName: L,
      firstName: F,
      birthdate: B,
      phoneNumber: PO,
      adress: A,
      username: U,
    });
    return <Redirect to="/" />;
  };
 
  componentDidMount() {
    const URL="http://localhost:8000/person";
    axios
      .get(`${URL}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ id: response.data.id });
      });

  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <UserHeader />
        {/* Page content */}
        <div className="row">
          <Container className="mt--7" fluid>
            <div className="col-sm-12 col-md-4">
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col>
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            width="100%"
                            alt="..."
                            className="rounded-circle"
                            src="img/team-4-800x800.jpg"
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between"></div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <Row>
                      <div id="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h3>{this.state.data.username}</h3>
                      <h5>
                        {this.state.data.firstName} {this.state.data.lastName}
                      </h5>
                      <hr className="my-4" />
                      <h3>
                        CIN:
                        <span className="font-weight-light">
                          {"400987"}
                          {this.state.data.cin}
                        </span>
                      </h3>
                      <h3>
                        Phone number:
                        <span className="font-weight-light">
                          {"50078545"}
                          {this.state.data.phoneNumber}
                        </span>
                      </h3>
                      <h3>
                        Birth Date:
                        <span className="font-weight-light">
                          {"30/08/1996 "}
                          {this.state.data.birthdate}
                        </span>
                      </h3>
                      <h3>
                        Email:
                        <span className="font-weight-light">
                          {"fatma.jallouli@gmail.com"}
                          {this.state.data.email}
                        </span>
                      </h3>
                      <h3>
                      
                        
                      </h3>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </div>
            <div className="col-sm-12 col-md-8">
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 id="h3" className="mb-0">
                          My account
                        </h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) =>
                            this.update(
                              this.state.id,
                              this.state.cin,
                              this.state.email,
                              this.state.password,
                              this.state.lastName,
                              this.state.firstName,
                              this.state.birthdate,
                              this.state.phoneNumber,
                              this.state.adress,
                              this.state.username
                            )
                          }
                          size="sm"
                        >
                          update
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <div className="centrer">
                        <b>
                          <h3 className="heading-small ">User information</h3>
                        </b>
                        <br />
                        <br />
                      </div>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label text-center"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-username"
                                placeholder="fatma.jallouli"
                                type="text"
                                onChange={(e) =>
                                  this.setState({ username: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder="fatma.jallouli@gmail.com"
                                type="email"
                                defaultValue=""
                                onChange={(e) =>
                                  this.setState({ email: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-first-name"
                                placeholder="Fatma"
                                type="text"
                                onChange={(e) =>
                                  this.setState({ firstName: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-last-name"
                                placeholder="Jallouli"
                                type="text"
                                onChange={(e) =>
                                  this.setState({ lastName: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-cin"
                              >
                                CIN
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-cin"
                                placeholder="400"
                                type="text"
                                onChange={(e) =>
                                  this.setState({ cin: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-phone-number"
                              >
                                Phone number
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-phone-number"
                                placeholder="50078545"
                                type="text"
                                onChange={(e) =>
                                  this.setState({ phoneNumber: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-cin"
                              >
                                Birth Date
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue=""
                                id="input-Date-of-birth"
                                type="date"
                                onChange={(e) =>
                                  this.setState({ birthdate: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                id="label"
                                className="form-control-label"
                                htmlFor="input-password"
                              >
                                Password
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="123456789"
                                id="input-password"
                                placeholder="password"
                                type="password"
                                onChange={(e) =>
                                  this.setState({ password: e.target.value })
                                }
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
