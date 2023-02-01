const url = "http://localhost:1317"

//====================================================get-todos
const getTodos = async() => {
    const endpoint = `${url}/api/get-todos`
    const config = { method: "GET" }
    
    const res = await fetch( endpoint, config)
    return res.json()
}

//==============================================getAllCompleted
const getAllCompleted = async() => {
    const endpoint = `${url}/api/get-all-completed`
    const config = { method: "GET" }
    
    const res = await fetch( endpoint, config)
    return res.json()
}

//======================================================AddTodo
const addTodo = async(data) => {
    const endpoint = `${url}/api/add-todo`
    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    
    const res = await fetch( endpoint, config)
    return res.json()
}

//================================================deleteAll
//with completed= false
const deleteAll = async() => {
    const endpoint = `${url}/api/delete-all`
    const config = { method: "DELETE" }

    const res = await fetch( endpoint, config)
    return res.json()
    
}

//==========================================deleteAllCompleted
//with completed= true
const deleteAllCompleted = async() => {
    const endpoint = `${url}/api/delete-all-completed`
    const config = { method: "DELETE" }

    const res = await fetch( endpoint, config)
    return res.json()
    
}


//================================================deleteOne
//with completed= false
const deleteOne = async(id) => {
    const endpoint = `${url}/api/delete-one`
    const config = { 
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }

    const res = await fetch( endpoint, config)
    return res.json()
}

//==============================================completeOne
//with completed= false
const completeOne = async(id) => {
    const endpoint = `${url}/api/complete-one`
    const config = { 
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }
    
    const res = await fetch( endpoint, config)
    return res.json()
}

//==============================================updateOne
const updateOne = async(data) => {
    // console.log(`data.........${data.todo}`)
    // console.log(`id.........${data.id}`)
    const endpoint = `${url}/api/update-one/${data.id}`
    const config = { 
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    
    const res = await fetch( endpoint, config)
    return res.json()
}

export { getTodos, getAllCompleted, addTodo, 
    deleteAll, deleteAllCompleted, deleteOne, completeOne, updateOne }