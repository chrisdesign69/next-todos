import React, { Suspense } from "react";

//Styles
import styles from "app/styles/min/ListTodos.module.css";

//Components
import Loader from "./loader";
import Items from "./items";
import { getTodos } from "./crud-todos";

const ListTodos = async () => {
  const todos = await getTodos();
  const datas = todos.map((data) => {
    // console.log(data.todo.length);
    const key = data._id;
    const myTodo = data.todo;
    // console.log(myTodo.length);
    return (
      <div key={key}>
        <Suspense fallback={<Loader />}>
          <Items todo={myTodo} id={key}/>
        </Suspense>
      </div>
    );
  });
  // return <div className={styles.container}>{datas}</div>;
  return <div className={styles.container}>{todos.length < 6 ? datas : <p className={styles.centerMe}>Pls Do some Stuff!!!</p> }</div>;
};

export default ListTodos;
