import React from "react";
import Card from "react-bootstrap/Card";
import UserContext from "./UserContext";

const CreateAccount = () => {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field || (label === "password" && password.length < 8)) {
      if (label === "password" && password && password.length < 8) {
        setStatus("Error: " + label);
        alert(`${label} must be at least 8 characters long`);
        return false;
      }
      setStatus("Error: " + label);
      alert(`No ${label} has been entered`);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <Card bg={"primary"} text={"white"} style={{ width: "18rem" }}>
        <Card.Header style={{ padding: ".75rem 1.25rem" }}>
          Create Account
        </Card.Header>
        <Card.Body style={{ padding: "1.25rem" }}>
          {show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
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
                className="btn btn-light"
                onClick={handleCreate}
                disabled={!name && !email && password.length < 8 ? true : false}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateAccount;
