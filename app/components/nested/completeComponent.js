"use client"

import React from 'react'

//Icons
import { TfiCheckBox } from "react-icons/tfi"

//Styles
import styles from "app/styles/min/ListTodos.module.css"
import { useRouter } from 'next/navigation'
import { completeOne } from '../crud-todos'


const CompleteOneComponent = ({id}) => {
    const router = useRouter()
    
    const completeHandler = () => {
        completeOne(id)
        router.push("/completed")
    }
    return (
        <div className={styles.complete} onClick={completeHandler}><TfiCheckBox /></div>
    )
}

export default CompleteOneComponent