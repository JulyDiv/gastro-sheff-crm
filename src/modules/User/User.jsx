import React, { useState } from "react";
import styles from "./User.module.sass";
import { Input } from "../../components/Input/Input";
import { HeaderTable } from "../HeaderTable/HeaderTable";
import { UserList } from "../UserList/UserList";

export const User = ({ users, isLoading, getUser }) => {

  const [isActive, setIsActive] = useState(false);
  const [dataFrom, setDataFrom] = useState("");
  const [dataTo, setDataTo] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");

  const filterNameUser = users.filter((item) => {
    return item.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const filterPhoneUser = users.filter((item) => {
    return item.phone.includes(filterPhone);
  });

  const filterDateUser = users.filter((item) => {
    return item.date.includes(dataFrom) | item.date.includes(dataTo);
  });

  return (
    <>
      <div className={styles.order}>
        <div className={styles.header}>
          <h1 className={styles.title}>Клиенты</h1>
          <div className={styles.box}>
            <button className={`${styles.button} button`} onClick={() => {}}>
              Добавить клиента
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
                className={`${styles.title}`}
              />
              {!isActive ? (
                <>
                  <UserList filter={users} />
                </>
              ) : (
                <>
                  {isActive === "Поиск по имени" && (
                    <UserList filter={filterNameUser} />
                  )}
                  {isActive === "Поиск по номеру телефона" && (
                    <UserList filter={filterPhoneUser} />
                  )}
                  {isActive === "Поиск по дате" && (
                    <UserList filter={filterDateUser} />
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
