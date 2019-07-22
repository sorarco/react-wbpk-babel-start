import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
class Dashboard extends Component {

  render() {
    return (
      <div className="app flex-row align-items-center login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="logo" />
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this._signIn}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="cui-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"

                          placeholder="E-mail"
                          autoComplete="e-mail"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="cui-lock-locked" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"

                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary-cup"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link
                            color="link"
                            className="btn-link-gray-cup px-0"
                            to="/info"
                          >
                            Forgot password?
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard;

