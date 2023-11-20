import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


function Layout() {
    return (
        <>
            {<Header />}
            <Outlet />
            <div>rodape</div>
        </>
    )
}

export default Layout