import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Offer from "./pages/Offer.tsx";
import StandardOffer from "./pages/offers/StandardOffer.tsx";
import BasicOffer from "./pages/offers/BasicOffer.tsx";
import AdvancedOffer from "./pages/offers/AdvancedOffer.tsx";
import Contact from "./pages/Contact.tsx";
import Policy from "./pages/Policy.tsx";
import ErrorBoundary from "./pages/ErrorBoundary.tsx";

export default function App() {

    addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} errorElement={<ErrorBoundary />}>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/o-nas"} element={<About />} />
                <Route path={"/projekty/:id"} element={<Projects />} />
                <Route path={"/oferta"} element={<Offer />}>
                    <Route index element={<StandardOffer />} />
                    <Route path={"/oferta/pakiet-podstawowy"} element={<BasicOffer />} />
                    <Route path={"/oferta/pakiet-zaawansowany"} element={<AdvancedOffer />} />
                </Route>
                <Route path={"/kontakt"} element={<Contact />} />
                <Route path={"/polityka-prywatnosci"} element={<Policy />} />
            </Route>
        )
    );

  return (
    <RouterProvider router={router} />
  )
}