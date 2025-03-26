import OfferPackage from "./OfferPackage"

export default function StandardOffer() {
    return (
        <>            
        <section className="choose-offer-section center place-content-center mt-24">
            <OfferPackage 
                chose = {false}
                title = {"pakiet podstawowy"}
                src = {"/oferta/pakiet-podstawowy"}
            />
            <OfferPackage 
                chose = {true}
                title = {"pakiet standardowy"}
                src = {"/oferta"}
            />
            <OfferPackage 
                chose = {false}
                title = {"pakiet zaawansowany"}
                src = {"/oferta/pakiet-zaawansowany"}
            />
        </section>
        <section className="offer-desc-section w-4/5 mx-auto text-left mt-24 text-mochi-black">
            <div>
                <h4 className="text-mochi-orange">PAKIET STANDARDOWY (PROJEKT KONCEPCYJNY)</h4>
                <p className="mt-10 mb-3 mx-0 text-mochi-orange">ZAKRES</p>
                <ul className="list-disc ml-4">
                    <li>Inwentaryzacja - pomiar stanu istniejącego<span className="text-mochi-orange">*</span></li>
                    <li>Koncepcja układu funkcjonalnego (minimum 2 propozycje do każdego pomieszczenia) z 1 poprawką do przedstawionych propozycji</li>
                    <li>Moodboard<span className="text-mochi-orange">**</span> (jeden wariant dla każdego pomieszczenia) z 1 poprawką do przedstawionej propozycji</li>
                    <li>Wizualizacje 3D z 1 poprawką do przedstawionej propozycji</li>
                    <li>Lista zakupów</li>
                </ul>
                <p className="mt-10 mx-0">w tym pakiecie dostosowujemy się do istniejącego/zaplanowanego układu elektryki oraz wod-kan;</p>
            </div>
        </section>
    </>
    )
}