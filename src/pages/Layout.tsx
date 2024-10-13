import HeaderButton from "../components/HeaderButton.tsx";
import {Outlet, Link} from "react-router-dom";
import sign from "../data/pictures/layout/sign.svg";
import fb from "../data/pictures/layout/facebook.svg";
import ig from "../data/pictures/layout/instagram.svg";
import be from "../data/pictures/layout/behance.svg";

import logo from "../data/pictures/landing_page/logo.svg";

export default function Layout() {
    return(
        <>
            <header>
                <div className="nav-logo">
                    <Link to="/">
                        <img className="w-5" alt="sign" src={sign}></img>
                    </Link>
                </div>
                <div className="w-6/12 flex place-content-between">
                    <Link to="/o-nas">
                        <HeaderButton
                            value="o nas"
                        />
                    </Link>
                    <HeaderButton
                        value="projekty"
                    />
                    <HeaderButton
                        value="oferta"
                    />
                    <HeaderButton
                        value="kontakt"
                    />
                </div>
                <div className="nav-icons flex">
                    <img alt="fb" src={fb}></img>
                    <img alt="ig" src={ig}></img>
                    <img alt="tw" src={be}></img>
                </div>
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
                        <button className="mx-1"><img src={fb}></img></button>
                        <button className="mx-1"><img src={ig}></img></button>
                        <button className="mx-1"><img src={be}></img></button>
                    </div>
                </div>
            </footer>
        </>
    )
}