import React from "react";
import Card from "react-bootstrap/Card";
import { UserContext } from "./UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState(0);
  const Message = withReactContent(Swal);

  const handleWithdraw = () => {
    if (ctx.loggedIn.status === false) {
      Message.fire({
        title: <strong>Error</strong>,
        html: <i>Must be logged in first</i>,
        icon: "error",
      });
      return false;
    }

    if (isNaN(parseInt(withdraw))) {
      setWithdraw(0);
      Message.fire({
        title: <strong>Error</strong>,
        html: <i>Withdraw must be a number</i>,
        icon: "error",
      });
      return false;
    } else if (parseInt(withdraw) < 0) {
      setWithdraw(0);
      Message.fire({
        title: <strong>Error</strong>,
        html: <i>Withdraw can't be a negative number</i>,
        icon: "error",
      });
      return false;
    } else if (ctx.users[ctx.loggedIn.index].balance < parseInt(withdraw)) {
      setWithdraw(0);
      Message.fire({
        title: <strong>Error</strong>,
        html: <i>Not enough funds</i>,
        icon: "error",
      });
      return false;
    }

    //ctx.users[account].balance -= parseInt(withdraw);
    ctx.users[ctx.loggedIn.index].balance -= parseInt(withdraw);
    setWithdraw(0);
    Message.fire({
      title: <strong>Success</strong>,
      html: <i>Your withdraw has been completed!</i>,
      icon: "success",
    });
    return true;
  };

  return (
    <>
      <Card bg={"secondary"} text={"white"} className={"w-75 mx-auto"}>
        <Card.Header
          className={"bg-primary"}
          style={{ padding: ".75rem 1.25rem" }}
        >
          Withdraw
        </Card.Header>
        <Card.Body style={{ padding: "1.25rem" }}>
          <>
            Account Balance:{" "}
            {ctx.loggedIn.index
              ? ctx.users[ctx.loggedIn.index].balance
              : "Not Logged In"}
            <br />
            To Withdraw: {withdraw}
            <br />
            <br />
            Amount
            <br />
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
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
