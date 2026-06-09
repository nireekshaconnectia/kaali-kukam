// Layout.tsx
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

     
        <Outlet  />
        <Footer />
     
    </div>
  );
}

export default Layout;