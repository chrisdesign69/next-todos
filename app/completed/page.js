import React, { Suspense } from 'react'

//Styles
import styles from "app/styles/min/Completed.module.css"

//Components
import Loader from '../components/loader'
import ListItem from './listItems'
import ControllerItem from './controller'

const Completed = () => {
    return (
        <div className={styles.container}>
            <h3>Completed</h3>
            <Suspense fallback={<Loader />}> <ListItem /> </Suspense>
            <Suspense fallback={<Loader />}> <ControllerItem /> </Suspense>
        </div>
    )
}

export default Completed