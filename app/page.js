import React,{ Suspense } from 'react'

//Styles
import styles from "app/styles/min/Home.module.css";

//Components
import Loader from "./components/loader";
import Input from "./components/input";
import ListTodos from "./components/listTodos";
import Controller from "./components/controller";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Todos</div>
      <div className={styles.input}> <Suspense fallback={<p className={styles.loading}>loading <span><Loader /></span> Input... </p>}> <Input /></Suspense> </div>
      <div className={styles.listTodo}><Suspense fallback={<p className={styles.loading}>loading <span><Loader /></span> ListTodos... </p>}> <ListTodos /></Suspense></div>
      <div className={styles.controller}><Suspense fallback={<Loader />}> <Controller /></Suspense></div>
    </div>
  );
}