import React from "react";
import styles from "./HeaderTable.module.sass";
import { ItemTable } from "../../components/ItemTable/ItemTable";

export const HeaderTable = ({
  className,
  id,
  date,
  name,
  phone,
  program,
  sum,
  button1,
  button2
}) => {
  return (
    <div className={styles.wrapper}>
      {id && (
        <span className={`${styles.item} ${className} ${styles.id}`}>{id}</span>
      )}
      {date && (
        <span className={`${styles.item} ${className} ${styles.date}`}>
          {date}
        </span>
      )}
      {name && (
        <span className={`${styles.item} ${className} ${styles.name}`}>
          {name}
        </span>
      )}
      {phone && (
        <span className={`${styles.item} ${className} ${styles.phone}`}>
          {phone}
        </span>
      )}
      {program && (
        <span className={`${styles.item} ${className} ${styles.program}`}>
          {program}
        </span>
      )}
      {sum && (
        <span className={`${styles.item} ${className} ${styles.sum}`}>
          {sum}
        </span>
      )}
      <button className={`${styles.item} ${className} ${styles.button}`}>
        {button1}
      </button>
      {/* <button className={`${styles.item} ${className} ${styles.button}`}>
        {button2}
      </button> */}
    </div>
  );
};