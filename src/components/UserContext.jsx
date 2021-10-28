import React from "react";

export const UserContext = React.createContext(null);

const UserContextProvider = (props) => {
  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name: "Abel",
            email: "abel@mit.edu",
            password: "secret",
            balance: 100,
          },
          {
            name: "Milton",
            email: "miltonjginebra@gmail.com",
            password: "secret",
            balance: 100,
          },
        ],
        loggedIn: {
          name: "",
          email: "",
          index: null,
          status: false,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
