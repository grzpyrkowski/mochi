import { motion } from "framer-motion";
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
            <section className="section-logo bg-mochi-gray text-mochi-orange text-2xl">
                <div className="center my-16">
                    <img alt="logo-mochi" src={logo}></img>
                </div>
                <div className="center my-16">
                    <p className="roboto-light w-1/2">Tworzymy wnętrza z pasją do ludzi, architektury i designu - tworzymy przestrzenie z pasją i dbałością o każdy detal. 
                        Wierzymy, że wnętrza odzwierciedlają osobowość i styl życia, dlatego każdy projekt jest unikalny i dopasowany do Twoich potrzeb. Zapraszamy do współpracy!
                    </p>
                </div>
            </section>
            <section className="section-vertical-wiz bg-mochi-gray flex-between">
                <motion.div className="mt-28">
                    <VerticalWizPanel
                        url1={wiz1}
                        url2={wiz2}
                    />
                </motion.div>
                <motion.div>
                    <VerticalWizPanel
                        url1={wiz3}
                        url2={wiz4}
                    />
                </motion.div>
                <div className="mt-48">
                    <VerticalWizPanel
                        url1={wiz5}
                        url2={wiz6}
                    />
                </div>
                <motion.div className="mt-28">
                    <VerticalWizPanel
                        url1={wiz7}
                        url2={wiz8}
                    />
                </motion.div>
            </section>
            <section className="section-meetus">
                <div className="relative">
                    <img className="block" alt="mochi design owners and designers working together on upcoming project" src={wspolne1}></img>
                    <div className="absolute z-10 text-left w-2/3 bottom-20 left-40 text-mochi-white">
                        <div className="flex"><h1 className="mb-5">POZNAJ MO.CHI DESIGN</h1><img className="rounded-none w-5 ml-8 mb-5" src={sign}></img></div>
                        <p className="mx-0">
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
                    <p className="my-10 mx-0">
                        Poznaj wybrane projekty, które świadczą o naszym zaangażowaniu, kreatywności i profesjonalizmie. 
                        Aby zobaczyć pełne portfolio, odwiedź nasz profil na <a href='https://www.behance.net/michalimietlin' target="_blank"><u>Behance</u></a>, gdzie znajdziesz więcej inspirujących realizacji.
                    </p>
                </div>
                <LPRealisation 
                    picUrl={real}
                    projUrl="salon"
                    title="Salon w kamienicy"
                    desc="Salon powstał siema nara"
                    year={2024}
                />
                <LPRealisation 
                    picUrl={real}
                    projUrl="kuchnia"
                    title="Salon w kamienicy"
                    desc="Salon powstał siema nara"
                    year={2024}
                />
                <LPRealisation 
                    picUrl={real}
                    projUrl="kuchnia"
                    title="Salon w kamienicy"
                    desc="Salon powstał siema nara"
                    year={2024}
                />
            </section>
            <section className="section-idea center text-mochi-orange bg-mochi-brown">
                <div className="my-36 w-2/3">
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