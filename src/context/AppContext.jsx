import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppWrapper = ({ children }) => {

  const [logins, setLogins] = useState("");
  const [passwords, setPasswords] = useState("");
  const [isLoader, setIsLoader] = useState(true);
  const [isLogged, setIsLogged] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/order`)
      .then(({ data }) => {
        setOrders(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    setIsLogged(
      window.localStorage.getItem("logins") &&
        window.localStorage.getItem("passwords")
    );
  }, []);

  useEffect(() => {
    window.sessionStorage.getItem("isloader");
  }, []);

  useEffect(() => {
    sessionStorage.setItem("isLoader", "false");
  }, []);

  const contextValue = {
    isLogged,
    setIsLogged,
    logins,
    setLogins,
    passwords,
    setPasswords,
    isLoader,
    setIsLoader,
    isLogin,
    setIsLogin,
    orders,
    setOrders,
    isLoading,
    setIsLoading,
    getData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
