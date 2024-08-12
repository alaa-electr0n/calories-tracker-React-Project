import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

//
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MainLayout = lazy(() => import("./pages/MainLayout"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const DemoPage = lazy(() => import("./pages/DemoPage"));
const RecordDetails = lazy(() => import("./pages/RecordDetails"));

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="app" element={<MainLayout />}>
              <Route index element={<Navigate replace to="tracker" />} />
              <Route path="tracker" element={<AppLayout />} />
              <Route path="track-how" element={<DemoPage />} />
            </Route>
            <Route path="/record/:id" element={<RecordDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
