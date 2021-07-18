import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Logout() {
  const history = useHistory();

  useEffect(() => {
    logout();
  });

  function logout() {
    localStorage.setItem("isLoggedin", false);
    axios.get("/logout").then((response) =>
      history.push({
        pathname: "/home",
        state: response.data,
      })
    );
  }
  return <div></div>;
}

export default Logout;
