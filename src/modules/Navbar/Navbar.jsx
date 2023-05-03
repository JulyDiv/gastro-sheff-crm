import React, { useState, useContext } from "react";
import styles from "./Navbar.module.sass";
import { accordionData } from "../../utils/accordion";
import { NavbarItem } from "../../components/NavbarItem/NavbarItem";
import { AppContext } from "../../context/AppContext";


export const Navbar = () => {

  const { isActiveButton, setIsActiveButton } = useContext(AppContext);

  console.log(isActiveButton);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.info}>LOGO</div>
          <div className={styles.block}>
            {accordionData.map(({ title, id }) => (
              <NavbarItem
                key={id}
                title={title}
                setIsActiveButton={setIsActiveButton}
              />
            ))}
            {/* <NavbarItem title="Заказы" setIsActiveButton={setIsActiveButton} />
            <NavbarItem title="Клиенты" setIsActiveButton={setIsActiveButton} />
            <NavbarItem title="Отчет" setIsActiveButton={setIsActiveButton} /> */}
          </div>
        </div>
      </nav>
    </>
  );
};