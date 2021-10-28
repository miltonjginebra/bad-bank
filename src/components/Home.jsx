import React from "react";
import { UserContext } from "./UserContext";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Home = () => {
  const ctx = React.useContext(UserContext);
  const Message = withReactContent(Swal);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(ctx.loggedIn.status);

  const handleLogin = () => {
    ctx.users.find((user, index) => {
      if (user.email === email && user.password === password) {
        ctx.loggedIn.name = user.name;
        ctx.loggedIn.email = user.email;
        ctx.loggedIn.index = index;
        ctx.loggedIn.status = true;
        return setLoggedIn(true);
      }
      return false;
    });

    if (ctx.loggedIn.status === false) {
      Message.fire({
        title: <strong>Error</strong>,
        html: <i>Email or password are incorrect</i>,
        icon: "error",
      });
      return false;
    }
  };

  const handleLogout = () => {
    ctx.loggedIn.name = "";
    ctx.loggedIn.email = "";
    ctx.loggedIn.status = false;
    setEmail("");
    setPassword("");
    return setLoggedIn(false);
  };

  return (
    <>
      <Container className="text-center w-75">
        <Card className="bg-secondary text-white">
          <Card.Header className="p-3 text-white bg-primary">
            BadBank Landing Module
          </Card.Header>
          <Card.Body className="pb-1">
            <h3>{loggedIn === true ? `Hi ${ctx.loggedIn.name}` : ""}</h3>
            <h5>Welcome to the bank</h5>
            <Card.Text>You can move around using the navigation bar.</Card.Text>

            {loggedIn === false ? (
              <>
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleLogin}
                  disabled={!email && password.length < 8 ? true : false}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
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
