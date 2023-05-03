/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import Link from "next/link";
import styles from "./UserItem.module.sass";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

export const UserItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    getUser,
    orders,
    filterOrder,
    setFilterOrder,
  } = useContext(AppContext);

  const onDelete = (data) => {
    console.log(data);
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
      <div
        key={item ? item.id : ""}
        className={`${styles.block}`}
        onClick={() => onClick(item.id)}
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
          <button
            className={`${styles.item} ${styles.button}`}
            //onClick={() => setIsOpen(true)}
          >
            Открыть
          </button>
        ) : (
          // <Link
          //   href={`/users/${item.id}`}
          //   target="_blank"
          //   className={`${styles.item} ${styles.button}`}
          // >
          //   Открыть
          // </Link>
          <span className={`${styles.item} ${styles.button} ${styles.title}`}>
            Открыть
          </span>
        )}
        {/* {item ? (
          <button className={`${styles.item} ${styles.button}`} onClick={() => onClick()}>Открыть</button>
        ) : (
          <span className={`${styles.item} ${styles.button} ${styles.title}`}>
            Открыть
          </span>
        )} */}
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
