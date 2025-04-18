import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from './components/ScrollToTop.tsx'
import signOrange from "../data/pictures/layout/sign.svg";
import signWhite from "../data/pictures/layout/sign_white.svg";
import fbOrange from "../data/pictures/layout/facebook.svg";
import fbWhite from "../data/pictures/layout/facebook_white.svg";
import igOrange from "../data/pictures/layout/instagram.svg";
import igWhite from "../data/pictures/layout/instagram_white.svg";
import beOrange from "../data/pictures/layout/behance.svg";
import beWhite from "../data/pictures/layout/behance_white.svg";
import back_to_top from "../data/pictures/layout/back_to_start_arrow.svg";
import MobilePlaceholder from "./components/MobilePlaceholder.tsx";

export default function Layout() {
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        }
    }, [isMobile])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        // isMobile ?
        // <MobilePlaceholder />
        // :
        <>
            {/* <ContactAlert /> */}
            <ScrollToTop />
            <header
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {hover ?
                    <Header
                        urlSign={signWhite}
                        urlFB={fbWhite}
                        urlIG={igWhite}
                        urlBE={beWhite}
                    />
                    :
                    <Header
                        urlSign={signOrange}
                        urlFB={fbOrange}
                        urlIG={igOrange}
                        urlBE={beOrange}
                    />
                }
            </header>
            <div id="app-wrapper">
                <main>
                    <Outlet />
                </main>
                <section className="back-to-top center">
                    <div className="center mt-12 lg:mt-16 cursor-pointer" onClick={handleScroll}>
                        <img src={back_to_top} />
                        <p className="uppercase mt-4">powrót do góry strony</p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}