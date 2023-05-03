import React, { useState } from "react";
import styles from "./OrderList.module.sass";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderList = ({ filter }) => {
  return (
    <>
      {filter.map((order, id) => (
        <OrderItem key={id} order={order} />
      ))}
    </>
  );
};
