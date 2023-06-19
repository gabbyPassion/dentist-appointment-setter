import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    HOME: "/",
};

function Root() {
    return (
    <>
        <nav>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
        </nav>
        <Outlet />
    </>
    );
}
    

export default Root;