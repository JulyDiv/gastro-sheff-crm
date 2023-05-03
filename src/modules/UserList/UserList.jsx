import React, { useState } from "react";
import styles from "./UserList.module.sass";
import { UserItem } from "../UserItem/UserItem";

export const UserList = ({ filter }) => {
  return (
    <>
      {filter.map((user, id) => (
        <UserItem key={id} user={user} />
      ))}
    </>
  );
};
