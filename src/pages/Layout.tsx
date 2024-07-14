import HeaderButton from "../components/HeaderButton.tsx";
import {Outlet} from "react-router-dom";
import sign from "../data/pictures/sign.svg"
import fb from "../data/pictures/facebook.svg"
import ig from "../data/pictures/instagram.svg"
import be from "../data/pictures/behance.svg"

export default function Layout() {
    return(
        <>
            <header>
                <div className="nav-logo">
                    <img className="w-5" alt="sign" src={sign}></img>
                </div>
                <div className="w-6/12 flex place-content-between">
                    <HeaderButton
                        value="o nas"
                    />
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
            </footer>
        </>
    )
}