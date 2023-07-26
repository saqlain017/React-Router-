import { appContext } from "../app"
import { useContext } from "react"
export const Home = ()=>{
    const {userName} = useContext(appContext)
    return <h1>This is home Page with the user : {userName}</h1>
}