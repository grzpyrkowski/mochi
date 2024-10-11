import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import About from "./pages/About.tsx";


export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} >
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/o-nas"} element={<About />} />
            </Route>
        )
    );

  return (
      <div id="app-wrapper" className="relative">
          <RouterProvider router={router} />
      </div>
  )
}