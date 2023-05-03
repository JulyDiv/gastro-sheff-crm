/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  //const [logins, setLogins] = useState("");
  //const [passwords, setPasswords] = useState("");
  //const [user, setUser] = useState();
  const [isLoader, setIsLoader] = useState(true);
  const [isLogged, setIsLogged] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  //const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState();
  const [filterOrder, setFilterOrder] = useState(orders);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const getUser = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/users`)
      .then(({ data }) => {
        setUsers(data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getData = (id) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/orders`)
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  // useEffect(() => {
  //   setIsLogged(
  //     window.localStorage.getItem("logins") &&
  //       window.localStorage.getItem("passwords")
  //   );
  // }, []);

  // useEffect(() => {
  //   window.sessionStorage.getItem("isloader");
  // }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("isLoader", "false");
  // }, []);

  const contextValue = {
    isLogged,
    setIsLogged,
    isLoader,
    setIsLoader,
    isLogin,
    setIsLogin,
    orders,
    users,
    setOrders,
    isLoading,
    setIsLoading,
    getData,
    getUser,
    user,
    setUser,
    filterOrder,
    setFilterOrder,
    isActiveButton,
    setIsActiveButton
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
