/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import Link from "next/link";
import styles from "./UserItem.module.sass";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { ItemTable } from "../../components/ItemTable/ItemTable";

export const UserItem = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getUser, orders, filterOrder, setFilterOrder } =
    useContext(AppContext);

  const onDelete = (data) => {
    console.log(data);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_HOST}/users/${user.id}`)
      .then(({ data }) => {
        console.log(data);
        getUser();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const onClick = (id) => {
    let newOrders = [...orders].filter((item) => item.userId === id);
    setIsOpen(true);
    setFilterOrder(newOrders);
    console.log(newOrders);
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  //console.log(isOpen);

  return (
    <>
      <div key={user.id} className={`${styles.wrapper}`}>
        <ItemTable
          id={user.id}
          date={user.dateUser}
          name={user.name}
          phone={user.phone}
          button1="Подробнее"
          button2="Удалить"
          onDelete={onDelete}
        />
      </div>
      {isOpen && (
        <>
          <p>Open</p>
          {filterOrder.map(({ name, id, program }) => (
            <div key={id} style={{ height: "50px" }}>
              <p>{name}</p>
              <p>{program}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};
