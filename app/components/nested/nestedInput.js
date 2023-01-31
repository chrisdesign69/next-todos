"use client"

import React from 'react'

//Styles
import styles from "app/styles/min/Input.module.css"

//Icons
import { BsFillPlusSquareFill } from "react-icons/bs";

const NestedInput = ({ register, handleSubmit, submitHandler }) => {
    return (
        <form className={styles.nestedContainer} onSubmit={handleSubmit(submitHandler)}>
            <input type="text" name="todo" autoComplete='off' required { ...register("todo") } />
            {/* <div className={styles.submit} onClick={handleSubmit(submitHandler)} ><BsFillPlusSquareFill /></div> */}
            <div className={styles.submit} onClick={handleSubmit(submitHandler)} ><BsFillPlusSquareFill /></div>
        </form>
    )
}

export default NestedInput

export const myPattern = /^[A-z0-9 -.,üöäàéè@=:/;!?¨(\r\n|\r|\n)+]+$/i