// Layout.tsx
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      {/* Main content with padding-top for fixed navbar and horizontal alignment */}
      <main className="flex-1 pt-15.25">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;