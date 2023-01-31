"use client"

import React from 'react'

//Icons
import { TfiPencilAlt } from "react-icons/tfi"

//Styles
import styles from "app/styles/min/ListTodos.module.css"

const editHandler = () => console.log("edit");

const EditComponent = () => {
    return (
        <div className={styles.edit}><TfiPencilAlt /></div>
    )
}

export default EditComponent