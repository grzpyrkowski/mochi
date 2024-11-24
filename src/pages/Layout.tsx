import {Outlet} from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header.tsx";
import ScrollToTop from '../components/ScrollToTop.tsx'
import signOrange from "../data/pictures/layout/sign.svg";
import signWhite from "../data/pictures/layout/sign_white.svg";
import fbOrange from "../data/pictures/layout/facebook.svg";
import fbWhite from "../data/pictures/layout/facebook_white.svg";
import igOrange from "../data/pictures/layout/instagram.svg";
import igWhite from "../data/pictures/layout/instagram_white.svg";
import beOrange from "../data/pictures/layout/behance.svg";
import beWhite from "../data/pictures/layout/behance_white.svg";
import logo from "../data/pictures/landing_page/logo.svg";

export default function Layout() {

    const [hover, setHover] = useState(false);

    function handleClick() {
        window.open('mailto:contactmochidesign@gmail.com')
    }

    return(
        <>
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
            <main>
                <Outlet />
            </main>
            <footer>
                <img className="mx-auto mt-20 w-1/5" src={logo}></img>
                <div className="flex place-content-between w-3/5 mx-auto my-10 uppercase">
                    <a href="/">strona główna</a>
                    <a href="/o-nas">o nas</a>
                    <a href="/projekty">projekty</a>
                    <a href="/oferta">oferta</a>
                    <a href="/kontakt">kontakt</a>
                    <a>polityka prywatności</a>
                </div>
                <div className="flex place-content-between w-2/5 mx-auto my-10">
                    <button onClick={handleClick}>contactmochidesign@gmail.com</button>
                    <div className="flex">
                        <a className="mx-2"><img src={fbOrange}></img></a>
                        <a className="mx-2"><img src={igOrange}></img></a>
                        <a className="mx-2"><img src={beOrange}></img></a>
                    </div>
                </div>
            </footer>
        </>
    )
}