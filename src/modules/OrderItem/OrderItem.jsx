/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./OrderItem.module.sass";
import axios from "axios";
import { ItemTable } from "../../components/ItemTable/ItemTable";

export const OrderItem = ({ getData, order }) => {

  // const onDelete = (data) => {
  //   console.log(data);
  //   axios
  //     .delete(
  //       `${process.env.NEXT_PUBLIC_API_HOST}/user/${item.id}order/${item.id}`
  //     )
  //     .then(({ data }) => {
  //       console.log(data);
  //       getData();
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // };

  return (
    <>
      <div key={order.id} className={`${styles.wrapper}`}>
        <ItemTable
          id={order.id}
          date={order.dateOrder}
          name={order.name}
          phone={order.phone}
          program={order.program}
          sum={order.sum}
          button1="Подробнее"
          button2="Печать"
        />
      </div>
    </>
  );
};
