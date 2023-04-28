/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./OrderItem.module.sass";
import axios from "axios";

export const OrderItem = ({ getData, item }) => {

  const onDelete = (data) => {
    console.log(data);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_HOST}/order/${item.id}`)
      .then(({ data }) => {
        console.log(data);
        getData();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <>
      <div
        key={item ? item.id : ""}
        className={`${styles.block}`}
      >
        {item ? (
          <span className={`${styles.item} ${styles.id}`}>{item.id}</span>
        ) : (
          <span className={`${styles.item} ${styles.id} ${styles.title}`}>
            Номер заказа
          </span>
        )}
        {item ? (
          <span className={`${styles.item} ${styles.data}`}>{item.date}</span>
        ) : (
          <span className={`${styles.item} ${styles.data} ${styles.title}`}>
            Дата
          </span>
        )}
        {item ? (
          <span className={`${styles.item} ${styles.name}`}>{item.name}</span>
        ) : (
          <span className={`${styles.item} ${styles.name} ${styles.title}`}>
            Имя
          </span>
        )}
        {item ? (
          <span className={`${styles.item} ${styles.phone}`}>{item.phone}</span>
        ) : (
          <span className={`${styles.item} ${styles.phone} ${styles.title}`}>
            Телефон
          </span>
        )}
        {item ? (
          <span className={`${styles.item} ${styles.city}`}>{item.city}</span>
        ) : (
          <span className={`${styles.item} ${styles.city} ${styles.title}`}>
            Город
          </span>
        )}
        {item ? (
          <span className={`${styles.item} ${styles.sum}`}>{item.total}Р</span>
        ) : (
          <span className={`${styles.item} ${styles.sum} ${styles.title}`}>
            Сумма
          </span>
        )}
        {item ? (
          <button
            className={`${styles.item} ${styles.button}`}
            onClick={() => onDelete()}
          >
            Удалить
          </button>
        ) : (
          <span className={`${styles.item} ${styles.button} ${styles.title}`}>
            Удалить
          </span>
        )}
        {item ? (
          <button
            className={`${styles.item} ${styles.button}`}
            onClick={() => onDelete()}
          >
            Изменить
          </button>
        ) : (
          <span className={`${styles.item} ${styles.button} ${styles.title}`}>
            Изменить
          </span>
        )}
        {item ? (
          <button className={`${styles.item} ${styles.button}`}>Открыть</button>
        ) : (
          <span className={`${styles.item} ${styles.button} ${styles.title}`}>
            Печать
          </span>
        )}
      </div>
    </>
  );
};
