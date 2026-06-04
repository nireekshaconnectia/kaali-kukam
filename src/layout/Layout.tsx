import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // prevent body scroll; Home handles its own scroll
      }}
    >
      <Navbar />

      {/* This inner div is the actual scroll container */}
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
        id="scroll-container"
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
