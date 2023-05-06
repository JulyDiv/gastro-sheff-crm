import React from "react";
import { PageItem } from "../PageItem/PageItem";

export const PageList = ({ filter }) => {

  return (
    <>
      {filter.map((item, id) => (
        <PageItem key={id} item={item} />
      ))}
    </>
  );
};
