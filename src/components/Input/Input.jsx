import React, { useState } from "react";
//import styles from "./Input.module.sass";

export const Input = ({
  button,
  type,
  placeholder,
  onChange,
  isActive,
  setIsActive,
  className,
  name
}) => {

  const onActive = (name) => {
    setIsActive(name);
  };

  return (
    <>
      {button && <button onClick={() => onActive(name)}>{button}</button>}
      {/* {button && <button onClick={() => setIsActive(false)}>X</button>} */}
      {isActive === name && (
        <>
          <input
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
        </>
      )}
    </>
  );
};
