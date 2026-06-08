import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

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

      <motion.div
        style={{
          flex: 1,
          overflowY: "scroll",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
        id="scroll-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Outlet context={{ isReady }} />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Layout;