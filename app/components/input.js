"use client"

import React, { Suspense } from 'react'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'

//Styles
import styles from "app/styles/min/Input.module.css"

//Components
import Loader from './loader'
import NestedInput from './nested/nestedInput'
import ErrorMsg from './errorMsg'
import { addTodo } from './crud-todos'




const Input = () => {

        const router = useRouter()

        const {register,
            formState: { errors },
            handleSubmit,
            reset}   = useForm()


        const submitHandler = async(data) =>{
            // console.log(data)
            await addTodo(data)
            reset()
            router.refresh()
        }
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}><Suspense fallback={<Loader />}> 
            <NestedInput 
            register={register}
            handleSubmit={handleSubmit}
            submitHandler={submitHandler}
            />
            </Suspense></div>
            <ErrorMsg />
        </div>
    )
}

export default Input