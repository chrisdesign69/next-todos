import React, { Suspense } from 'react'

//Styles
import styles from "app/styles/min/ListTodos.module.css"

//Components
import Loader from './loader'
import EditComponent from './nested/editComponent'
import DeleteComponent from './nested/deleteComponent'
import CompleteOneComponent from './nested/completeComponent'

const Items = ({todo, id}) => {
    return (
        <div className={styles.itemsContainer}>
            <p className={styles.todo}>{todo}</p>
            <div className={styles.icons}>
                <Suspense fallback={<Loader />}><EditComponent /></Suspense>
                <Suspense fallback={<Loader />}><DeleteComponent id={id}/> </Suspense>
                <Suspense fallback={<Loader />}><CompleteOneComponent id={id}/></Suspense>
            </div>
        </div>
    )
}

export default Items