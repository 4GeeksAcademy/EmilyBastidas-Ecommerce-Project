import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DemoNav } from "../components/DemoNav";

export const Layout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <ScrollToTop>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <Outlet />
        </main>

        {!isAdmin && <Footer />}
        {!isAdmin && <DemoNav />}
      </div>
    </ScrollToTop>
  );
};