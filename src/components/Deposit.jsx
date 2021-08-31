import React from "react";
import Card from "react-bootstrap/Card";
import UserContext from "./UserContext";

const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState(0);
  const [account, setAccount] = React.useState(0);

  const handleDeposit = () => {
    ctx.users[account].balance += parseInt(deposit);
    return setDeposit(0);
  };

  return (
    <>
      <Card bg={"primary"} text={"white"} style={{ width: "18rem" }}>
        <Card.Header style={{ padding: ".75rem 1.25rem" }}>Deposit</Card.Header>
        <Card.Body style={{ padding: "1.25rem" }}>
          <>
            Account Balance: {ctx.users[account].balance}
            <br />
            To Deposit: {deposit}
            <br />
            <br />
            Name
            <br />
            <select
              className="form-control"
              id="account_name"
              onChange={(e) => setAccount(e.currentTarget.value)}
            >
              {ctx.users.map((user, index) => {
                return <option value={index}>{user.name}</option>;
              })}
            </select>
            <br />
            Amount
            <br />
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit}
              disabled={!deposit ? true : false}
            >
              Deposit
            </button>
          </>
        </Card.Body>
      </Card>
    </>
  );
};

export default Deposit;
