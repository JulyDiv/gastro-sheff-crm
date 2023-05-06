import React, { useContext } from "react";

import styles from "./ItemTable.module.sass";
import Link from "next/link";

export const ItemTable = ({ className, id, dateOrder, dateUser, date, name, phone, program, sum, button, onDelete }) => {

  return (
    <>
      {id && (
        <span className={`${styles.item} ${className} ${styles.id}`}>{id}</span>
      )}
      {/* {date && (
        <span className={`${styles.item} ${className} ${styles.date}`}>
          {date}
        </span>
      )} */}
      {dateOrder && (
        <span className={`${styles.item} ${className} ${styles.date}`}>
          {dateOrder}
        </span>
      )}
      {dateUser && (
        <span className={`${styles.item} ${className} ${styles.date}`}>
          {dateUser}
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
      {dateOrder ? (
        <button className={`${styles.item} ${className} ${styles.button}`}>
          {button}
        </button>
      ) : (
        <Link
          href={`/${id}`}
          target="_blank"
          className={`${styles.item} ${className} ${styles.button}`}
        >
          {button}
        </Link>
      )}
    </>
  );
};
