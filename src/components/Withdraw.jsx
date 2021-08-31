import React from "react";
import Card from "react-bootstrap/Card";
import UserContext from "./UserContext";

const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState(0);
  const [account, setAccount] = React.useState(0);

  const handleWithdraw = () => {
    ctx.users[account].balance >= parseInt(withdraw)
      ? (ctx.users[account].balance -= parseInt(withdraw))
      : alert("Not enough funds");
    return setWithdraw(0);
  };

  return (
    <>
      <Card bg={"primary"} text={"white"} style={{ width: "18rem" }}>
        <Card.Header style={{ padding: ".75rem 1.25rem" }}>
          Withdraw
        </Card.Header>
        <Card.Body style={{ padding: "1.25rem" }}>
          <>
            Account Balance: {ctx.users[account].balance}
            <br />
            To Withdraw: {withdraw}
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
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
              disabled={!withdraw ? true : false}
            >
              Withdraw
            </button>
          </>
        </Card.Body>
      </Card>
    </>
  );
};

export default Withdraw;
