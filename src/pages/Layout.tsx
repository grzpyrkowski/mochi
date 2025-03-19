import {Outlet, Link} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.tsx";
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
import logo from "../data/pictures/landing_page/logo.svg";
import ContactAlert from "./components/ContactAlert.tsx";


export default function Layout() {
    const [hover, setHover] = useState(false);

    function handleClick() {
        window.open('mailto:contactmochidesign@gmail.com')
    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {/* <ContactAlert /> */}
            <div id="app-wrapper">
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
                <section className="back-to-top center">
                    <div className="mt-20 cursor-pointer" onClick={handleScroll}>
                        <img src={back_to_top} className="center"/>
                        <p className="uppercase mt-4">powrót do góry strony</p>
                    </div>
                </section>
                <footer>
                    <img className="mx-auto mt-20 w-1/5" src={logo}></img>
                    <div className="flex-between w-3/5 mx-auto my-10 uppercase">
                        <Link to="/">strona główna</Link>
                        <Link to="/o-nas">o nas</Link>
                        <Link to="/projekty/salon">projekty</Link>
                        <Link to="/oferta">oferta</Link>
                        <Link to="/kontakt">kontakt</Link>
                        <Link to="/polityka-prywatnosci">polityka prywatności</Link>
                    </div>
                    <div className="flex-between w-2/5 mx-auto my-10">
                        <button onClick={handleClick}>contactmochidesign@gmail.com</button>
                        <div className="flex">
                            <Link to="https://www.facebook.com/profile.php?id=61561418972337" className="mx-2"><img src={fbOrange}></img></Link>
                            <Link to="https://www.instagram.com/mo.chidesign/" className="mx-2"><img src={igOrange}></img></Link>
                            <Link to="https://www.behance.net/michalimietlin" className="mx-2"><img src={beOrange}></img></Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}