import React, { useState, useContext } from "react";
import styles from "./Page.module.sass";
import { AppContext } from "../../context/AppContext";
import { InputBlock } from "../InputBlock/InputBlock";
import { PageList } from "../PageList/PageList";
import { HeaderTable } from "../HeaderTable/HeaderTable";
import { ItemTable } from "../../components/ItemTable/ItemTable";

export const Page = ({ item, button, title }) => {

  const { orders, users, getUser, getData, isLoading } = useContext(AppContext);

  const [isActive, setIsActive] = useState(false);
  const [dataFrom, setDataFrom] = useState("");
  const [dataTo, setDataTo] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterNumber, setFilterNumber] = useState("");

  const filterNameItem = item.filter((item) => {
    return item.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const filterPhoneItem = item.filter((item) => {
    return item.phone.includes(filterPhone);
  });

  const filterDateItem = item.filter((item) => {
    return item.date.includes(dataFrom) | item.date.includes(dataTo);
  });

  const filterNumberItem = item.filter((item) => {
    return item.id.includes(filterNumber);
  });

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.box}>
            <button className={`${styles.button} button`} onClick={() => {}}>
              {button}
            </button>
          </div>
        </div>
        <InputBlock
          item={item}
          setDataTo={setDataTo}
          setDataFrom={setDataFrom}
          setFilterNumber={setFilterNumber}
          setFilterPhone={setFilterPhone}
          setFilterName={setFilterName}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <div className={styles.wrapper}>
          {isLoading ? (
            <div style={{ margin: "auto" }}>
              <h2>Загрузка...</h2>
            </div>
          ) : (
            <>
              <div className={styles.headerTable}>
                <ItemTable
                  id="№"
                  dateOrder={
                    item === orders ? "Дата заказа" : "Дата регистрации"
                  }
                  //dateUser="Дата регистрации"
                  name="Клиент"
                  phone="Телефон"
                  program={item === orders ? "Программа" : ""}
                  sum={item === orders ? "Сумма" : ""}
                  className={`${styles.title}`}
                />
              </div>
              {/* <HeaderTable
                id="№"
                date={item === orders ? "Дата" : ""}
                name="Клиент"
                phone="Телефон"
                program={item === orders ? "Программа" : ""}
                sum={item === orders ? "Сумма" : ""}
                className={`${styles.title}`}
              /> */}
              {!isActive ? (
                <>
                  <PageList filter={item} />
                </>
              ) : (
                <>
                  {isActive === "Поиск по имени" && (
                    <PageList filter={filterNameItem} />
                  )}
                  {isActive === "Поиск по номеру телефона" && (
                    <PageList filter={filterPhoneItem} />
                  )}
                  {isActive === "Поиск по дате" && (
                    <PageList filter={filterDateItem} />
                  )}
                  {isActive === "Поиск по номеру заказа" && (
                    <PageList filter={filterNumberItem} />
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
