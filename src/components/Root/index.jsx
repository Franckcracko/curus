import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default function Root () {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
    )
  }