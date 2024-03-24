import { Outlet } from "react-router-dom";
import MainNavbar from "../HomePage/Navbar/MainNavbar";
import SubNavbar from "../HomePage/Navbar/SubNavbar";

const Layout = () => {
    return (
        <>
            <SubNavbar></SubNavbar>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            {/* todo: here will be footer */}
        </>
    );
};

export default Layout;