import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import { useBackgroundMusic } from "./hooks/useBackgroundMusic";

// 👇 Replace with your actual audio file path inside src/assets/
const bgMusic = new URL("./assets/background.mpeg", import.meta.url).href;

const Home = lazy(() => import("./pages/Home") as Promise<{ default: ComponentType<any> }>);

function App() {
  const location = useLocation();

  // 🎵 Background music — plays site-wide, loops silently
  useBackgroundMusic(bgMusic, 0.35);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
