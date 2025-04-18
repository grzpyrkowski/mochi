import OfferPackage from "./OfferPackage"

export default function AdvancedOffer() {
    return (
        <>            
        <section className="choose-offer-section mt-24">
            <OfferPackage 
                chose = {false}
                title = {"pakiet podstawowy"}
                src = {"/oferta/pakiet-podstawowy"}
            />
            <OfferPackage 
                chose = {false}
                title = {"pakiet standardowy"}
                src = {"/oferta"}
            />
            <OfferPackage 
                chose = {true}
                title = {"pakiet zaawansowany"}
                src = {"/oferta/pakiet-zaawansowany"}
            />
        </section>
        <section className="offer-desc-section w-4/5 mx-auto text-left mt-24">
            <div>
                <h4 >PAKIET ZAAWANSOWANY (PROJEKT KONCEPCYJNY)</h4>
                <p className="mt-10 mb-3 mx-0">ZAKRES</p>
                <ul className="list-disc ml-4">
                    <li>Inwentaryzacja - pomiar stanu istniejącego*</li>
                    <li>Koncepcja układu funkcjonalnego (minimum 2 propozycje do każdego pomieszczenia) z 1 poprawką do przedstawionych propozycji</li>
                    <li>Moodboard** (jeden wariant dla każdego pomieszczenia) z 1 poprawką do przedstawionej propozycji</li>
                    <li>Wizualizacje 3D z 1 poprawką do przedstawionej propozycji</li>
                    <li>Lista zakupów</li>
                </ul>
                <p className="mt-10 mx-0">w tym pakiecie dostosowujemy się do istniejącego/zaplanowanego układu elektryki oraz wod-kan;</p>
            </div>
        </section>
    </>
    )
}