import HorizontalPhotoPanel from "../components/VerticalWizPanel"
import logo from "../data/pictures/landing_page/logo.svg"
import wiz1 from "../data/pictures/landing_page/wiz_1.png"
import wspolne1 from "../data/pictures/landing_page/wspolne_1.png"
import real1 from "../data/pictures/landing_page/realisation_1.png"
import real2 from "../data/pictures/landing_page/realisation_2.png"
import real3 from "../data/pictures/landing_page/realisation_3.png"
import sign from "../data/pictures/layout/sign.svg"
import bulb from "../data/pictures/landing_page/lightbulb.svg"
import MochiButton from "../components/MochiButton"

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
                    <div className="absolute z-10 text-left w-2/3 bottom-20 left-40 text-mochi-white">
                    <div className="flex"><h1 className="mb-5">POZNAJ MO.CHI DESIGN</h1><img className="rounded-none w-5 ml-8 mb-5" src={sign}></img></div>
                        <p>
                            Jesteśmy absolwentkami kierunku Architektura na Politechnice Wrocławskiej oraz Krakowskiej. 
                            Doświadczenie w projektowaniu zdobywałyśmy zarówno w trakcie studiów, jak i podczas pracy zawodowej. 
                            Na swoim koncie, oprócz projektów wnętrz domów oraz mieszkań, posiadamy projekty komercyjne oraz wnętrza pod inwestycje. 
                            Podejmiemy się różnych wyzwań i pomożemy Ci stworzyć Twoją wymarzoną przestrzeń - zapraszamy do kontaktu!
                        </p>
                        <MochiButton 
                            value="dowiedz się więcej"
                            url="/o-nas"
                        />
                    </div>
                </div>
            </section>
            <section className="section-realisations rounded-b-lg">
                <div className="my-36 text-left text-mochi-orange ml-40 w-2/3">
                    <h1>wybrane realizacje</h1>
                    <p className="my-10">
                        Poznaj wybrane projekty, które świadczą o naszym zaangażowaniu, kreatywności i profesjonalizmie. 
                        Aby zobaczyć pełne portfolio, odwiedź nasz profil na <a href=''><u>Behance</u></a>, gdzie znajdziesz więcej inspirujących realizacji.
                    </p>
                </div>
                <img className="mb-6" src={real1}></img>
                <img className="mb-6" src={real2}></img>
                <img className="mb-20" src={real3}></img>
            </section>
            <section className="section-idea center text-mochi-orange bg-mochi-brown">
                <div className="my-36 w-2/3">
                    <img className="mb-10 mx-auto" src={bulb}></img>
                    <h1 className="mb-10">masz pomysł na swoje wnętrze?</h1>
                    <p>
                        Martwi Cię natłok i różnorodność możliwości oraz rozwiązań? Zaufaj nam - pomożemy Ci przejść przez ten proces. 
                        Opisz nam swoje potrzeby a my zrobimy wszystko co w naszej mocy aby zrealizować Twoje pomysły.
                    </p>
                    <MochiButton 
                        value="sprawdź naszą ofertę"
                        url=""
                    />
                </div>
            </section>
        </>
    )
}