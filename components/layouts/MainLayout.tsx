import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home - Next</title>
          <meta name="description" content="Home Page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={`${styles.main} ${inter.className}`}>{children}</main>
      </div>
    </>
  )
}
