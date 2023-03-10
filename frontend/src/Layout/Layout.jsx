import { CssBaseline } from '@mui/material'
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <CssBaseline />
            {/* Header AppBar */}
            <Header />
            <main style={{ margin: '30px', minHeight: '70vh' }}>
                <Outlet/>
            </main>
            {/* Footer  */}
            <Footer />
        </>
    );
}

export default Layout;