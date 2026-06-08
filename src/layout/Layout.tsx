import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ isReady = true }: { isReady?: boolean }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Navbar isReady={isReady} />

      <div
        style={{
          flex: 1,
          overflowY: "scroll",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch", // smooth momentum scroll on iOS
          scrollBehavior: "smooth",
        }}
        id="scroll-container"
      >
        <Outlet context={{ isReady }} />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
