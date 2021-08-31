import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Header className="p-3">BadBank Landing Module</Card.Header>
          <Card.Body className="pb-1">
            <h5>Welcome to the bank</h5>
            <Card.Text>You can move around using the navigation bar.</Card.Text>
          </Card.Body>
          <Card.Img className="p-3" variant="bottom" src="../bank.png" />
        </Card>
      </Container>
    </>
  );
};

export default Home;
