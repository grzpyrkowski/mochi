import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";


export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} >
                <Route path={"/"} element={<LandingPage />} />
            </Route>
        )
    );

  return (
      <div id="app-wrapper">
          <RouterProvider router={router} />
      </div>
  )
}