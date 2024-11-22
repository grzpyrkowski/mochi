import { Outlet } from "react-router";

export default function Offer() {

    return (
        <>
            <Outlet />
            <section className="offer-disclousers-section w-4/5 center mt-24 text-left">
                <p className="text-mochi-black mx-0">
                    <span className="text-mochi-orange">*</span> Na terenie Wrocławia oraz Krakowa usługa darmowa, natomiast wykonanie jej w innym miejscu płatne dodatkowo 600 zł 
                    (gdy istnieje możliwość dostarczenia posiadanych rysunków stanu istniejącego wykonanie inwentaryzacji nie jest konieczne).<br/>
                    <span className="text-mochi-orange">**</span> Zestawienie na tablicy przykładowych materiałów oraz kolorów, które mogą zostać wykorzystane przy projekcie aranżacji wnętrza.
                </p>
            </section>
        </>
    )
}