import { lazy, Suspense, useState, useEffect, useCallback, type ComponentType } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import { useBackgroundMusic } from "./hooks/useBackgroundMusic";
import { EntryOverlay } from "./components/kalikulam/EntryOverlay";

const bgMusic = new URL("./assets/Aigiri_Nandini_Bg.mp3", import.meta.url).href;

const Home = lazy(() => import("./pages/Home") as Promise<{ default: ComponentType<any> }>);

function App() {
  const location = useLocation();
  const { play } = useBackgroundMusic(bgMusic, 0.35);

  const [showOverlay, setShowOverlay] = useState(true);

  const handleEnter = useCallback(() => {
    play();
    setShowOverlay(false);
  }, [play]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <EntryOverlay visible={showOverlay} onEnter={handleEnter} />

      <Suspense fallback={<div className="flex items-center text-2xl text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
