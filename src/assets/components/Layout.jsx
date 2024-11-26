import { Outlet } from "react-router-dom";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* Navbar visible en todas las páginas */}
      <MyNavbar />
      {/* Renderiza el contenido de las rutas hijas */}
      <main>
        <Outlet />
      </main>
      {/* Footer común a todas las páginas */}
      <Footer />
    </div>
  );
};

export default Layout;
