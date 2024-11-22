import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import LivingRoom from "./pages/projects/LivingRoom.tsx";
import Bathroom from "./pages/projects/Bathroom.tsx";
import Kitchen from "./pages/projects/Kitchen.tsx";
import Offer from "./pages/Offer.tsx";
import StandardOffer from "./pages/offers/StandardOffer.tsx";
import BasicOffer from "./pages/offers/BasicOffer.tsx";
import AdvancedOffer from "./pages/offers/AdvancedOffer.tsx";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} >
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/o-nas"} element={<About />} />
                <Route path={"/projekty"} element={<Projects />}>
                    <Route index element={<LivingRoom />} />
                    <Route path={"/projekty/lazienka"} element={<Bathroom />} />
                    <Route path={"/projekty/kuchnia"} element={<Kitchen />} />
                </Route>
                <Route path={"/oferta"} element={<Offer />}>
                    <Route index element={<StandardOffer />} />
                    <Route path={"/oferta/pakiet-podstawowy"} element={<BasicOffer />} />
                    <Route path={"/oferta/pakiet-zaawansowany"} element={<AdvancedOffer />} />
                </Route>
            </Route>
        )
    );

  return (
      <div id="app-wrapper" className="relative">
          <RouterProvider router={router} />
      </div>
  )
}