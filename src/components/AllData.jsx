import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { UserContext } from "./UserContext";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Container>
        {ctx.users.map((user, index) => {
          return (
            <Card
              key={index}
              className="me-1 mt-2"
              style={{ width: "18rem", display: "inline-block" }}
            >
              <Card.Header className="p-3 bg-primary text-white">
                <h5>{user.name}</h5>
              </Card.Header>
              <Card.Body className="pb-1">
                Email: {user.email}
                <br />
                Password: {user.password}
                <br />
                Balance: {user.balance}
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default AllData;
