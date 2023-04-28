/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./OrderItem.module.sass";
import axios from "axios";

export const OrderItem = ({ getData, item }) => {

  const [isOpenItem, setIsOpenItem] = useState(false);

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

  const onChangeStatus = (data) => {
    console.log(data);
    axios
      .put(`${process.env.NEXT_PUBLIC_API_HOST}/order/${item.id}`, {
        name: item.name,
        phone: item.phone,
        email: item.email,
        merch: item.merch,
        total: item.total,
        status: "true",
        sum: item.sum,
      })
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
        className={
          item && item.status === "true"
            ? `${styles.block} ${styles.block_active}`
            : `${styles.block}`
        }
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
          <span
            className={`${styles.item} ${styles.phone} ${
              isOpenItem ? "" : `${styles.hidden}`
            }`}
          >
            {item.phone}
          </span>
        ) : (
          <span
            className={`${styles.item} ${styles.phone} ${styles.title} ${styles.hidden}`}
          >
            Телефон
          </span>
        )}
        {/* {item ? (
          <span className={`${styles.item} ${styles.email}`} title={item.email}>
            {item.email}
          </span>
        ) : (
          <span className={`${styles.item} ${styles.email} ${styles.title}`}>
            Почта
          </span>
        )} */}
        {item ? (
          <span className={`${styles.item} ${styles.city} ${styles.hidden}`}>
            {item.city}
          </span>
        ) : (
          <span
            className={`${styles.item} ${styles.city} ${styles.title} ${styles.hidden}`}
          >
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

        {/* {item ? (
          <button
            className={`${styles.item} ${styles.button} ${styles.hidden}`}
            onClick={() => onChangeStatus(item.id)}
          >
            {item.status === "true" ? "Добавлен" : "Добавить"}
          </button>
        ) : (
          <span
            className={`${styles.item} ${styles.button} ${styles.title} ${styles.hidden}`}
          >
            Статус заказа
          </span>
        )} */}

        {item ? (
          <button
            className={`${styles.item} ${styles.button} ${styles.hidden}`}
            onClick={() => onDelete()}
          >
            Удалить
          </button>
        ) : (
          <span
            className={`${styles.item} ${styles.button} ${styles.title} ${styles.hidden}`}
          >
            Удалить
          </span>
        )}
        {item ? (
          <button
            className={`${styles.item} ${styles.button} ${styles.hidden}`}
            onClick={() => onDelete()}
          >
            Изменить
          </button>
        ) : (
          <span
            className={`${styles.item} ${styles.button} ${styles.title} ${styles.hidden}`}
          >
            Изменить
          </span>
        )}
        {item ? (
          <button
            className={`${styles.item} ${styles.button} ${styles.hidden}`}
          >
            Открыть
          </button>
        ) : (
          <span
            className={`${styles.item} ${styles.button} ${styles.title} ${styles.hidden}`}
          >
            Печать
          </span>
        )}
      </div>
    </>
  );
};
