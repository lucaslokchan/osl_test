import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
const ChatBot = dynamic(import("../components/chatbot"), { ssr: false });
import Link from "next/link";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Chatbot</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Link href="dashboard">
            <a>
              <h2 className="text-3xl font-bold">Dashboard</h2>
            </a>
          </Link>

          <ChatBot />
        </main>
      </div>
    );
  }
}

export default Home;
