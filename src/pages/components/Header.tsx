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
        <>
            <div className="nav-logo">
                <Link to="/">
                    <img className="w-5" alt="sign" src={urlSign}></img>
                </Link>
            </div>
            <div className="w-6/12 flex-beetwen">
                <Link to="/o-nas">
                    <HeaderButton value="o nas"/>
                </Link>
                <Link to="/projekty/salon">
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
                <Link to="https://www.facebook.com/profile.php?id=61561418972337"><img alt="fb" src={urlFB}></img></Link>
                <Link to="https://www.instagram.com/mo.chidesign/"><img alt="ig" src={urlIG}></img></Link>
                <Link to="https://www.behance.net/michalimietlin"><img alt="be" src={urlBE}></img></Link>
            </div>
        </>
    )
}