import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <Container className="text-center">
        <Card>
          <Card.Header className="p-3 text-white bg-primary">
            BadBank Landing Module
          </Card.Header>
          <Card.Body className="pb-1">
            <h5>Welcome to the bank</h5>
            <Card.Text>You can move around using the navigation bar.</Card.Text>
          </Card.Body>
          <div>
            <Card.Img
              className="p-3"
              variant="bottom"
              src="../bank.png"
              style={{ width: "18rem" }}
            />
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Home;
