// Layout.tsx
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar height */}
      <main className="flex-1 pt-18 md:pt-22">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;