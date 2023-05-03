import React, { useState } from "react";
import styles from "./User.module.sass";
import { UserItem } from "../UserItem/UserItem";

export const User = ({ users, isLoading, getUser }) => {
  const [search, setSearch] = useState("");
  const [] = useState(false);

  const filter = users.filter((item) => {
    //return item.name.toLowerCase().includes(search.toLowerCase());
    return item.phone.includes(search);
  });

  //const onClick = () => {};

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
              <UserItem />
              {filter.map((item, id) => (
                <UserItem key={id} getUser={getUser} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
