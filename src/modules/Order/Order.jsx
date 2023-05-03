import React, { useState, useContext } from "react";
import styles from "./Order.module.sass";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { OrderItem } from "../OrderItem/OrderItem";
import { Input } from "../../components/Input/Input";
import { OrderList } from "../OrderList/OrderList";
import { HeaderTable } from "../HeaderTable/HeaderTable";

export const Order = () => {
  const { orders, getData, isLoading } = useContext(AppContext);

  const [isActive, setIsActive] = useState(false);
  const [dataFrom, setDataFrom] = useState("");
  const [dataTo, setDataTo] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");

  const filterNameOrder = orders.filter((item) => {
    return item.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const filterPhoneOrder = orders.filter((item) => {
    return item.phone.includes(filterPhone);
  });

  const filterDateOrder = orders.filter((item) => {
    return item.date.includes(dataFrom) | item.date.includes(dataTo);
  });

  //console.log(isActive);

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
            
          </button>
          <button className={styles.tab_item} onClick={() => onStatusTrue()}>
            
          </button>
          <button className={styles.tab_item} onClick={() => onStatusFalse()}>
            
          </button>
        </div> */}
        <button onClick={() => setIsActive(false)}>X</button>
        <div>
          <Input
            button="Поиск по имени"
            name="Поиск по имени"
            type="text"
            placeholder="Поиск по имени"
            className={styles.input}
            onChange={setFilterName}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <div>
          <Input
            button="Поиск по номеру телефона"
            name="Поиск по номеру телефона"
            type="text"
            placeholder="Поиск по номеру телефона"
            className={styles.input}
            onChange={setFilterPhone}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <div>
          <Input
            button="Поиск по дате"
            name="Поиск по дате"
            type="date"
            className={styles.date}
            onChange={setDataFrom}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Input
            name="Поиск по дате"
            type="date"
            className={styles.date}
            onChange={setDataTo}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <br />
        <div className={styles.wrapper}>
          {isLoading ? (
            <div style={{ margin: "auto" }}>
              <h2>Загрузка...</h2>
            </div>
          ) : (
            <>
              <HeaderTable
                id="№"
                date="Дата"
                name="Клиент"
                phone="Телефон"
                program="Программа"
                sum="Сумма"
                className={`${styles.title}`}
              />
              {!isActive ? (
                <>
                  <OrderList filter={orders} />
                </>
              ) : (
                <>
                  {isActive === "Поиск по имени" && (
                    <OrderList filter={filterNameOrder} />
                  )}
                  {isActive === "Поиск по номеру телефона" && (
                    <OrderList filter={filterPhoneOrder} />
                  )}
                  {isActive === "Поиск по дате" && (
                    <OrderList filter={filterDateOrder} />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
