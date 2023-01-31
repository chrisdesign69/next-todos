"use client"

import React from 'react'
import { useRouter } from 'next/navigation'


//icons
import { BsTrash } from 'react-icons/bs'
import { deleteAll } from '../crud-todos'


const DeleteItems = () => {
    const router = useRouter()

    const deleteAllHandler = () => {
        deleteAll()
        router.refresh()
    }


    return (
        <div onClick={() => deleteAllHandler()}>
            <BsTrash />
        </div>
    )
}

export default DeleteItems