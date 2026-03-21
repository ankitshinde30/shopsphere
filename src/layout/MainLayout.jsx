import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        <>
        <Header />
        <main className="p-4">
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}