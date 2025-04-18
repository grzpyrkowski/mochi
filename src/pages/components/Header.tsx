import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";

type Props = {
    urlSign: string,
    urlFB: string,
    urlIG: string,
    urlBE: string,
}

export default function Header({urlSign, urlFB, urlIG, urlBE}: Props) {
    return (
        <div id="header" className="flex place-content-between">
                <Link to="/" className="nav-logo flex-center mr-10">
                    <img className="w-5" alt="sign" src={urlSign}></img>
                </Link>
                <div className="w-3/5 md:w-7/12 lg:w-1/2 flex-between">
                    <Link to="/o-nas">
                        <HeaderButton value="o nas"/>
                    </Link>
                    <Link to="/projekty/strefa-dzienna-w-Luksemburgu">
                        <HeaderButton value="projekty"/>
                    </Link>
                    <Link to="/oferta">
                        <HeaderButton value="oferta"/>
                    </Link>
                    <Link to="/kontakt">
                        <HeaderButton value="kontakt"/>
                    </Link>
                </div>
                <div className="nav-icons flex">
                    <Link to="https://www.facebook.com/profile.php?id=61561418972337" target="_blank"><img alt="fb" src={urlFB}></img></Link>
                    <Link to="https://www.instagram.com/mo.chidesign/" target="_blank"><img alt="ig" src={urlIG}></img></Link>
                    <Link to="https://www.behance.net/michalimietlin" target="_blank"><img alt="be" src={urlBE}></img></Link>
                </div>
        </div>
    )
}