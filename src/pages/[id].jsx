import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const resOrder = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/orders/${id}`
  );
  const resUser = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/${id}`
  );

  const dataOrder = await resOrder.json();
  const dataUser = await resUser.json();

  if (!dataOrder || !dataUser) {
    return {
      notFound: true,
    };
  }
  return {
    props: { order: dataOrder, user: dataUser },
  };
};

export default function Details({ order, user }) {

  //const { orders, users } = useContext(AppContext);

  return (
    <>
        <h1 style={{ justifyContent: "center", display: "flex" }}>
          Клиент №{user.id}
        </h1>
    </>
  );
}
