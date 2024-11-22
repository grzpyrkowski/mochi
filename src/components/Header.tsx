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
            <div className="w-6/12 flex place-content-between">
                <Link to="/o-nas">
                    <HeaderButton value="o nas"/>
                </Link>
                <Link to="/projekty">
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
                <img alt="fb" src={urlFB}></img>
                <img alt="ig" src={urlIG}></img>
                <img alt="tw" src={urlBE}></img>
            </div>
        </>
    )
}