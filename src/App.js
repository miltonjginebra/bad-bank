import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TopNaV from "./components/TopNav";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import UserContext from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <TopNaV />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" exact component={CreateAccount} />
            <Route path="/Deposit/" exact component={Deposit} />
            <Route path="/Withdraw/" exact component={Withdraw} />
            <Route path="/AllData/" exact component={AllData} />
          </div>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
