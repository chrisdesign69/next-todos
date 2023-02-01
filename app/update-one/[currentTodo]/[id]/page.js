import React, { Suspense } from 'react'
import Link from 'next/link'

//Styles
import styles from "app/styles/min/UpdateMe.module.css"


import { getTodos } from '@/app/components/crud-todos'
import Loader from '@/app/components/loader'
import UpdateOneInput from '../../updateOneInput'

const UpdateMe = ({ params }) => {
 
    const { id, currentTodo } = params
    return (
        <div className={styles.container}>
            <div className={styles.currentTodo}>{currentTodo}</div>
            <Suspense fallback={<Loader />}> <UpdateOneInput  id={id}/></Suspense>
            <Link href={"/"} className={styles.back}>back</Link>
        </div>
    )
}
export default UpdateMe




//generateStaticParams
export const generateStaticParams = async() => {
    const todos = await getTodos()

    return todos.map(data =>({
        id: data._id,
        currentTodo: data.todo
    }))
}