"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

//Icons
import { TfiTrash } from "react-icons/tfi"

//Styles
import styles from "app/styles/min/ListTodos.module.css"
import { deleteOne } from '../crud-todos'


const DeleteComponent = ({id}) => {
    const router = useRouter()
    const deleteHandler = () => {
        // console.log(id)
        deleteOne(id)
        router.refresh()
    }
    return (
        <div className={styles.delete} onClick={deleteHandler}><TfiTrash /></div>
    )
}

export default DeleteComponent