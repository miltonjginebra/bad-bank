import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { UserContext } from "./UserContext";

function AllData() {
  const ctx = React.useContext(UserContext);
  let even = true;
  return (
    <>
      <Container>
        <Card bg={"secondary"} text={"white"} className="">
          <Card.Header className=" bg-primary">
            <h5>All Data</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <Container className="w-100">
              <Row className={"bg-secondary text-white"}>
                <Col>Email:</Col>
                <Col>Password:</Col>
                <Col>Balance:</Col>
              </Row>
              {ctx.users.map((user, index) => {
                even = !even;
                return (
                  <Row
                    key={index}
                    className={
                      even ? "bg-light text-black" : "bg-white text-black"
                    }
                  >
                    <Col>{user.email}</Col>
                    <Col>{user.password}</Col>
                    <Col>{user.balance}</Col>
                  </Row>
                );
              })}
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AllData;
