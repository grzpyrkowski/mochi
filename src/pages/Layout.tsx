import {Outlet} from "react-router-dom";
import signOrange from "../data/pictures/layout/sign.svg";
import signWhite from "../data/pictures/layout/sign_white.svg";
import fbOrange from "../data/pictures/layout/facebook.svg";
import fbWhite from "../data/pictures/layout/facebook_white.svg";
import igOrange from "../data/pictures/layout/instagram.svg";
import igWhite from "../data/pictures/layout/instagram_white.svg";
import beOrange from "../data/pictures/layout/behance.svg";
import beWhite from "../data/pictures/layout/behance_white.svg";

import logo from "../data/pictures/landing_page/logo.svg";
import { useState } from "react";
import Header from "../components/Header.tsx";

export default function Layout() {

    const [hover, setHover] = useState(false);

    return(
        <>
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
                <div className="flex place-content-between w-3/5 mx-auto my-10">
                    <button>strona główna</button>
                    <button>o nas</button>
                    <button>projekty</button>
                    <button>oferta</button>
                    <button>kontakt</button>
                    <button>polityka prywatności</button>
                </div>
                <div className="flex place-content-between w-2/5 mx-auto my-10">
                    <button>formularz kontaktowy</button>
                    <button>email@gmail.com</button>
                    <div>
                        <button className="mx-1"><img src={fbOrange}></img></button>
                        <button className="mx-1"><img src={igOrange}></img></button>
                        <button className="mx-1"><img src={beOrange}></img></button>
                    </div>
                </div>
            </footer>
        </>
    )
}