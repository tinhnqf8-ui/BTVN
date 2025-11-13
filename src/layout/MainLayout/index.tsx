import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function NameLayout2() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default NameLayout2;