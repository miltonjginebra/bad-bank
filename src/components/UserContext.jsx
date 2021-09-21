import React from "react";

export const UserContext = React.createContext(null);

const UserContextProvider = (props) => {
  return (
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
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
