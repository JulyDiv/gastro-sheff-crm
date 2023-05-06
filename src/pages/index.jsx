import React, { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '../context/AppContext';
import { Page } from '../modules/Page/Page';

export default function Home() {
  const { isActiveButton, orders, users } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>CRM - Gastro Shef</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {isActiveButton === "Заказы" && (
          <Page item={orders} button="Добавить заказ" title="Заказы" />
        )}
        {isActiveButton === "Клиенты" && (
          <Page item={users} button="Добавить клиента" title="Клиенты" />
        )}
      </div>
    </div>
  );
}