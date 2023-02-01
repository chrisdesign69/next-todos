"use client"

import React from 'react'
import Link from 'next/link'

//Icons
import { TfiPencilAlt } from "react-icons/tfi"

//Styles
import styles from "app/styles/min/ListTodos.module.css"

const EditComponent = ({id, currentTodo}) => {
    return (
        <Link className={styles.edit} href={`/update-one/${currentTodo}/${id}`}><TfiPencilAlt /></Link>
    )
}

export default EditComponent