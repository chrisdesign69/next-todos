"use client"

import React from 'react'

//Styles
import styles from "app/styles/min/Completed.module.css"
import { useRouter } from 'next/navigation'
import { deleteAllCompleted } from '../components/crud-todos'

const ControllerItem = () => {
    const router = useRouter()

    const goBack = () => router.push("/")

    const deleteHandler = () => {
        deleteAllCompleted()
        router.refresh()
    }

    return (
        <div className={styles.controllerContainer}>
            <div className={styles.back} onClick={goBack}>back</div>
            <div className={styles.delete} onClick={deleteHandler}>delete-All</div>
        </div>
    )
}

export default ControllerItem