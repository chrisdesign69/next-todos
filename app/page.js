import Image from "next/image";

//Styles
import styles from "app/styles/min/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Title</div>
      <div className={styles.input}>Input</div>
      <div className={styles.listTodo}>ListItems</div>
      <div className={styles.controller}>Controller</div>
    </div>
  );
}
