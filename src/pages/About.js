import { useContext } from "react"
import { appContext } from "../app"
import ChangeUser from "../Components/ChangeUser"
export const About = ()=>{
    const {userName} = useContext(appContext);
    return (
    <>
    <h1>Profile, The active user is :{userName}</h1>
    <ChangeUser/>
    </>
    )
}
