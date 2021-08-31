import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import UserContext from "./UserContext";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h5>Accounts:</h5>
      <br />
      <Container>
        {ctx.users.map((user, index) => {
          return (
            <Card
              className="me-1"
              style={{ width: "18rem", display: "inline-block" }}
            >
              <Card.Header className="p-3">
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
