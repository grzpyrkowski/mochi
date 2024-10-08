import HorizontalPhotoPanel from "../components/VerticalWizPanel"
import logo from "../data/pictures/landing_page/logo.svg"
import wiz1 from "../data/pictures/landing_page/wiz_1.png"
import wspolne1 from "../data/pictures/landing_page/wspolne_1.png"
import sign from "../data/pictures/layout/sign.svg"

export default function LandingPage() {
    return (
        <>
            <section className="section-logo bg-mochi-gray text-mochi-orange text-2xl">
                <div className="center my-16">
                    <img alt="logo-mochi" src={logo}></img>
                </div>
                <div className="center my-16">
                    <p className="roboto-thin w-1/2">Tworzymy wnętrza z pasją do ludzi, architektury i designu - tworzymy przestrzenie z pasją i dbałością o każdy detal. 
                        Wierzymy, że wnętrza odzwierciedlają osobowość i styl życia, dlatego każdy projekt jest unikalny i dopasowany do Twoich potrzeb. Zapraszamy do współpracy!
                    </p>
                </div>
            </section>
            <section className="section-vertical-wiz bg-mochi-gray flex place-content-between">
                <div className="mt-28">
                    <HorizontalPhotoPanel
                        url1={wiz1}
                        url2={wiz1}
                    />
                </div>
                <div>
                    <HorizontalPhotoPanel
                        url1={wiz1}
                        url2={wiz1}
                    />
                </div>
                <div className="mt-48">
                    <HorizontalPhotoPanel
                        url1={wiz1}
                        url2={wiz1}
                    />
                </div>
                <div className="mt-28">
                    <HorizontalPhotoPanel
                        url1={wiz1}
                        url2={wiz1}
                    />
                </div>
            </section>
            <section className="section-meetus">
                <div className="relative">
                    <img className="block" alt="" src={wspolne1}></img>
                    <div className="absolute z-10 text-left w-1/2 bottom-10 left-10 text-mochi-white">
                    <div className="flex"><h1 className="text-5xl mb-5">POZNAJ MO.CHI DESIGN</h1><img className="rounded-none w-5 ml-8 mb-5" src={sign}></img></div>
                        <p>
                            Jesteśmy absolwentkami kierunku Architektura na Politechnice Wrocławskiej oraz Krakowskiej. 
                            Doświadczenie w projektowaniu zdobywałyśmy zarówno w trakcie studiów, jak i podczas pracy zawodowej. 
                            Na swoim koncie, oprócz projektów wnętrz domów oraz mieszkań, posiadamy projekty komercyjne oraz wnętrza pod inwestycje. 
                            Podejmiemy się różnych wyzwań i pomożemy Ci stworzyć Twoją wymarzoną przestrzeń - zapraszamy do kontaktu! 
                        </p>
                        <button>DOWIEDZ SIĘ WIĘCEJ</button>
                    </div>
                </div>
            </section>
        </>
    )
}