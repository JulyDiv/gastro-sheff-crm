import React, { useContext } from "react";
import styles from "./InputBlock.module.sass";
import { AppContext } from "../../context/AppContext";
import { Input } from "../../components/Input/Input";

export const InputBlock = ({ setDataTo, setDataFrom, setFilterName, setFilterNumber, setFilterPhone, setIsActive, isActive, item }) => {

  const { orders, users, getUser, getData, isLoading } = useContext(AppContext);

  return (
    <>
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
      {item === orders && <div>
        <Input
          button="Поиск по номеру заказа"
          name="Поиск по номеру заказа"
          type="number"
          placeholder="Поиск по номеру заказа"
          className={styles.input}
          onChange={setFilterNumber}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>}
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
    </>
  );
};