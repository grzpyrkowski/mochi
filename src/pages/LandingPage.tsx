import VerticalWizPanel from "./components/VerticalWizPanel"
import MochiButton from "./components/MochiButton";
import logo from "../data/pictures/landing_page/logo.svg";
import wiz1 from "../data/pictures/landing_page/1.jpg";
import wiz2 from "../data/pictures/landing_page/2.jpg";
import wiz3 from "../data/pictures/landing_page/3.jpg";
import wiz4 from "../data/pictures/landing_page/4.jpg";
import wiz5 from "../data/pictures/landing_page/5.jpg";
import wiz6 from "../data/pictures/landing_page/6.jpg";
import wiz7 from "../data/pictures/landing_page/7.jpg";
import wiz8 from "../data/pictures/landing_page/8.jpg";
import wspolne1 from "../data/pictures/landing_page/wspolne_1.png";
import real from "../data/pictures/landing_page/realisation.png";
import sign from "../data/pictures/layout/sign.svg";
import bulb from "../data/pictures/landing_page/lightbulb.svg";
import LPRealisation from "./components/LPRealisation";

export default function LandingPage() {
    return (
        <>
            <section className="section-logo center bg-mochi-gray text-mochi-orange md:text-2xl">
                <div className="center my-5 md:my-10 lg:my-16">
                    <img alt="logo-mochi" className="max-lg:w-5/6" src={logo}></img>
                </div>
                <div className="center flex-col md:mb-10 lg:my-16">
                    <p className="roboto-light w-1/2">
                        <b>Tworzymy wnętrza z pasją do ludzi, architektury i designu</b> - tworzymy harmonijne przestrzenie z pasją i dbałością o każdy detal. Wierzymy, że wnętrza odzwierciedlają osobowość i styl życia, dlatego każdy projekt jest unikalny i dopasowany do Twoich potrzeb.
                    </p>
                    <p className="chillax-medium md:w-1/2 whitespace-nowrap">Zainteresowany/a? Zapraszamy do współpracy!</p>
                </div>
            </section>
            <section className="section-vertical-wiz bg-mochi-gray flex-between">
                <div className="mt-28">
                    <VerticalWizPanel
                        url1={wiz1}
                        url2={wiz2}
                    />
                </div>
                <div>
                    <VerticalWizPanel
                        url1={wiz3}
                        url2={wiz4}
                    />
                </div>
                <div className="mt-48">
                    <VerticalWizPanel
                        url1={wiz5}
                        url2={wiz6}
                    />
                </div>
                <div className="mt-28">
                    <VerticalWizPanel
                        url1={wiz7}
                        url2={wiz8}
                    />
                </div>
            </section>
            <section className="section-meetus">
                <div className="relative">
                    <img className="block" alt="mochi design owners and designers working together on upcoming project" src={wspolne1}></img>
                    <div className="absolute z-10 text-left w-7/12 lg:w-2/3 bottom-14 lg:bottom-20 ml-24 lg:ml-40 text-mochi-white">
                        <div className="flex">
                            <h1 className="mb-5 whitespace-nowrap">POZNAJ MO.CHI DESIGN</h1>
                            <img className="rounded-none w-5 ml-4 lg:ml-8 mb-5" src={sign} />
                        </div>
                        <p className="mx-0 max-lg:my-0">
                            Jesteśmy absolwentkami kierunku Architektura na Politechnice Wrocławskiej oraz Krakowskiej. 
                            W Mo.chi Design wierzymy, że dobrze zaprojektowane wnętrze to coś więcej niż piękne formy i materiały. To przestrzeń, która współgra z Tobą, daje spokój i równowagę na co dzień. Tworzymy projekty które łączą funkcjonalność, indywidualność i subtelną harmonię – tak, by każde wnętrze było unikalne, ale jednocześnie ponadczasowe.
                        </p>
                        <MochiButton 
                            value="dowiedz się więcej"
                            url="/o-nas"
                        />
                    </div>
                </div>
            </section>
            <section className="section-realisations rounded-b-lg">
                <div className="my-36 text-left text-mochi-orange md:ml-24 lg:ml-40 w-2/3">
                    <h1>Realizacje</h1>
                    <p className="my-10 mx-0">
                        Nasze projekty to efekt uważnej analizy, dbałości o detale i kreatywnego podejścia do designu. Zobacz, jak wyglądają nasze realizacje i przekonaj się, że piękne wnętrza mogą być nie tylko inspirujące, ale i w pełni dopasowane do codziennego życia.
                    </p>
                </div>
                <LPRealisation 
                    picUrl={real}
                    projUrl="strefa-dzienna-w-Luksemburgu"
                    title="Strefa dzienna domu w Luksemburgu"
                    desc="Połączenie naturalnych materiałów – drewna i kamienia – z jasnymi, ciepłymi odcieniami. Tworzy elegancką, ale przytulną przestrzeń, w której design spotyka się komfortem."
                    year={2025}
                />
                <LPRealisation 
                    picUrl={real}
                    projUrl="mieszkanie-w-Warszawie"
                    title="Mieszkanie w Warszawie"
                    desc="Elegancka przestrzeń utrzymana w palecie szarości i brązów, gdzie minimalizm łączy się z funkcjonalnością. Subtelne faktury i przemyślane detale nadają wnętrzu wyjątkowy charakter."
                    year={2024}
                />
                <LPRealisation 
                    picUrl={real}
                    projUrl="dom-pod-Wroclawiem"
                    title="Dom pod Wrocławiem"
                    desc="Harmonijna przestrzeń, w której ciepłe beże i drewno tworzą przytulne, rodzinne wnętrze. Naturalne materiały i subtelne detale nadają mu ponadczasowy charakter."
                    year={2024}
                />
            </section>
            <section className="section-idea center text-mochi-orange bg-mochi-brown">
                <div className="center lg:my-10 py-8 w-2/3">
                    <img className="mb-10 mx-auto" src={bulb}></img>
                    <h2 className="mb-10">masz pomysł na swoje wnętrze?</h2>
                    <p>
                        Martwi Cię natłok i różnorodność możliwości oraz rozwiązań? Zaufaj nam - pomożemy Ci przejść przez ten proces. 
                        Opisz nam swoje potrzeby a my zrobimy wszystko co w naszej mocy aby zrealizować Twoje pomysły.
                    </p>
                    <MochiButton 
                        value="sprawdź naszą ofertę"
                        url="/oferta"
                    />
                </div>
            </section>
        </>
    )
}