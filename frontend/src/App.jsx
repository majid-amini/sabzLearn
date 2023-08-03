import React, { useState } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import AuthContext from "./contex/authcontex";

export default function App() {
  const router = useRoutes(routes);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = {};

  const login = (token) => {
    // setIsLoggedIn(true)
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = () => {
    setToken(null);
    setUserInfos({})
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
