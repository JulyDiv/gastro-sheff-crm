import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";


export default function UserId({ item }) {
  return (
    <>
        <h1>{item}</h1>
      {/* {!jacket ? <h1>Loading...</h1> : <CardItem jacket={jacket} />}
      <Complete jacket={jacket} /> */}
    </>
  );
}