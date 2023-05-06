/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styles from "./PageItem.module.sass";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { ItemTable } from "../../components/ItemTable/ItemTable";

export const PageItem = ({ item }) => {
  const { users, orders, getUser } = useContext(AppContext);

  const onDelete = (data) => {
    //console.log(data);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_HOST}/users/${item.id}`)
      .then(({ data }) => {
        console.log(data);
        getUser();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  //console.log(item);

  return (
    <>
      <div key={item.id} className={`${styles.wrapper}`}>
        <ItemTable
          id={item.id}
          dateOrder={item.dateOrder}
          dateUser={item.dateUser}
          name={item.name}
          phone={item.phone}
          program={item.program}
          sum={item.sum}
          button="Подробнее"
          onDelete={onDelete}
        />
      </div>
    </>
  );
};
