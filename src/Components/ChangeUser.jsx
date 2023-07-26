import React, { useState, useContext } from 'react'
import { appContext } from '../app'
const ChangeUser = (props)=>{
    const {setuserName} = useContext(appContext)
    const [newUser, setnewUser] = useState("")
    const chngUser = (event)=>{
        setnewUser(event.target.value)
    }
    const user = ()=>{
        setuserName(newUser);
    }
    return(
        <>
        <input onChange={chngUser}/>
        <button onClick={user}>Change User</button>
        </>
    )
}

export default ChangeUser