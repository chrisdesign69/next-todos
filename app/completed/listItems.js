import React from 'react'

//Styles
import styles from "app/styles/min/Completed.module.css"
import { getAllCompleted } from '../components/crud-todos'

const ListItem = async() => {
        const todos = await getAllCompleted()
        const datas = todos.map(data => {
            return(
                <div className={styles.key} key={data._id}>
                    <p>{data.todo}</p>
                </div>
            )
        })
    return (
        <div className={styles.listContainer}>
            {datas}
        </div>
    )
}

export default ListItem