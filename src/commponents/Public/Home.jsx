import { Link, Outlet } from "react-router-dom"
import BusinessDetails from "./businessDetails"
import DetermineMeeting from "../User/DetermineMeeting"
import BuisnessDetailsForm from "./buisnessDetailsForm"
import AllServices, { UserContext } from "./AllServices"

export default function Home() {
    return (<div>
        <UserContext.Provider value={{ isAdmin: false }}>
            <BusinessDetails></BusinessDetails>
            <br></br>
            <br></br>
            <AllServices></AllServices>
            <br></br>
           

            <Link to="/login">login for admin</Link>
        </UserContext.Provider>
        <Outlet />
    </div>)
}