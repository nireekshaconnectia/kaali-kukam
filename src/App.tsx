import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/Home") as Promise<{ default: ComponentType<any> }>);

function App() {
  const location = useLocation();
  
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