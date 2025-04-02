import { Outlet } from "react-router";
import MochiButton from "./components/MochiButton";

export default function Offer() {

    return (
        <>
            <Outlet />
            <section className="offer-disclousers-section w-4/5 center text-left flex-col">
                <div>
                    <MochiButton 
                        value="kontakt"
                        url="/kontakt"
                    />
                </div>
                <p className="mx-0 mt-24">
                    * Na terenie Wrocławia oraz Krakowa usługa darmowa, natomiast wykonanie jej w innym miejscu płatne dodatkowo 600 zł 
                    (gdy istnieje możliwość dostarczenia posiadanych rysunków stanu istniejącego wykonanie inwentaryzacji nie jest konieczne).<br/>
                    ** Zestawienie na tablicy przykładowych materiałów oraz kolorów, które mogą zostać wykorzystane przy projekcie aranżacji wnętrza.
                </p>
            </section>
        </>
    )
}