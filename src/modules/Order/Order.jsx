import React, { useState } from "react";
import styles from "./Order.module.sass";
import { OrderItem } from "../OrderItem/OrderItem";

export const Order = ({ orders, isLoading, getData }) => {
  const [search, setSearch] = useState("");
  const [] = useState(false);
  const onClick = () => {};

  return (
    <>
      <div className={styles.order}>
        <div className={styles.header}>
          <h1 className={styles.title}>Заказы</h1>
          <div className={styles.box}>
            <button className={`${styles.button} button`} onClick={() => {}}>
              Добавить заказ
            </button>
          </div>
        </div>
        {/* <div className={styles.tab}>
          <button className={`${styles.tab_item}`} onClick={() => onClickAll()}>
            Все инвесторы
          </button>
          <button className={styles.tab_item} onClick={() => onStatusTrue()}>
            Одобрены
          </button>
          <button className={styles.tab_item} onClick={() => onStatusFalse()}>
            На рассмотрении
          </button>
        </div> */}

        <input
          className={styles.input}
          type="text"
          placeholder="Поиск"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.wrapper}>
          {isLoading ? (
            <div style={{ margin: "auto" }}>
              <h2>Загрузка...</h2>
            </div>
          ) : (
            <>
              <OrderItem />
              {orders.reverse().map((item, id) => (
                <OrderItem key={id} getData={getData} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
