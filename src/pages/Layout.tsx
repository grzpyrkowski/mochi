import HeaderButton from "../components/HeaderButton.tsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return(
        <>
            <header>
                <HeaderButton
                    value="hey"
                />
                <HeaderButton
                    value="hi"
                />
                <HeaderButton
                    value="hello"
                />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </>
    )
}