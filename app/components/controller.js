
import React, { Suspense } from 'react'
import Link from 'next/link'

//Styles
import styles from "app/styles/min/Controller.module.css"

//Components
import Loader from './loader'
import CompleteAllComponent from './nested/completeAllComponent'
import DeleteItems from './nested/deleteItems'

const Controller = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.completeAll} href="/completed" ><Suspense fallback={<Loader />}><CompleteAllComponent /></Suspense></Link>
            <div className={styles.delete}><Suspense fallback={<Loader />}><DeleteItems/></Suspense></div>
        </div>
    )
}

export default Controller