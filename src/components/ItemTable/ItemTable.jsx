import React, { useState } from "react";
import styles from "./ItemTable.module.sass";

export const ItemTable = ({ className, id, date, name, phone, program, sum, button1, button2, onDelete }) => {

  return (
    <>
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
      <button
        className={`${styles.item} ${className} ${styles.button}`}
        onClick={button2 === "Удалить" ? () => onDelete() : null}
      >
        {button2}
      </button>
    </>
  );
};
