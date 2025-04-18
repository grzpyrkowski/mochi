import { Link } from "react-router-dom"
import logo from "../../data/pictures/landing_page/logo.svg";

export default function Footer() {

    function handleClick() {
        window.open('mailto:contactmochidesign@gmail.com')
    }

    return (
        <footer>
            <img className="mx-auto mt-12 lg:mt-20 w-1/5" src={logo}></img>
            <div className="flex-between md:w-3/4 lg:w-3/5 mx-auto my-10 uppercase">
                <Link to="/">strona główna</Link>
                <Link to="/o-nas">o nas</Link>
                <Link to="/projekty/salon">projekty</Link>
                <Link to="/oferta">oferta</Link>
                <Link to="/kontakt">kontakt</Link>
                <Link to="/polityka-prywatnosci">polityka prywatności</Link>
            </div>
            <div className="flex-between md:w-2/3 lg:w-1/2 mx-auto my-10">
                <div>
                    <p className="whitespace-nowrap my-0">+48 667 869 581</p>
                    <p className="whitespace-nowrap my-0">+48 507 383 099</p>
                </div>
                <button onClick={handleClick}>contactmochidesign@gmail.com</button>
            </div>
        </footer>
    )
}