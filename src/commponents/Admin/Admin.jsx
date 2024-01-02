import { Link, Outlet } from "react-router-dom";
import BusinessDetails from "../Public/businessDetails";
import CreateMeetForm from "../User/createMeetForm";
import AllServices, { UserContext } from "../Public/AllServices";
import MeetingList from "../Public/mettingList";
import AddServices from "./addService";

export default function Admin() {
    return (<div>
       <UserContext.Provider value={{isAdmin: true}}>
        <BusinessDetails />
        <br></br>
        <UserContext.Provider value={{isAdmin: true}}>
       <AllServices></AllServices>
        </UserContext.Provider>
        <br></br>
        <CreateMeetForm></CreateMeetForm>
        <br></br>
        <AddServices></AddServices>
        <br></br>
        <Link to="meetings" >meetings</Link>
        <br></br>
        </UserContext.Provider>
        <Outlet />
    </div>
    )
}