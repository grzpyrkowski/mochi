import MochiButton from './components/MochiButton';
import wspolne2 from '../data/pictures/about/wspolne_2.png';
import misiaNC from '../data/pictures/about/misia_nc.png';
import madziaNC from '../data/pictures/about/madzia_nc.png';
import misiaColor from '../data/pictures/about/misia_color.png';
import madziaColor from '../data/pictures/about/madzia_color.png';
import mail from '../data/pictures/about/envelope.svg';
import PortraitPanel from './components/PortraitPanel';

export default function About() {
    return (
        <>
            <section className='section-about-banner relative flex'>
                <img className='block' src={wspolne2} alt='The team of designers and owners of mochi – professionals in interior design'></img>
                <h1 className='absolute z-10 text-left left-20 top-1/2'>poznajmy się!</h1>
            </section>
            <section className='section-about-desc mt-24 text-left w-4/5 flex-col'>
                <h3>Projektujemy harmonię we wnętrzach</h3>
                    <p className='ml-0'>
                        Cześć, z tej strony Magda i Michalina z Mo.chi Design - bardzo nam miło, że zechciałeś/aś odwiedzić naszą stronę! 
                        Wnętrza, w których żyjemy, mają ogromny wpływ na nasze codzienne samopoczucie. To one kształtują atmosferę, budują nastrój i sprawiają, że czujemy się dobrze – albo przeciwnie, nie potrafimy się w nich odnaleźć. Dlatego wierzymy, że klucz do udanego projektu tkwi w harmonii – zarówno wizualnej, jak i tej, która wynika z idealnego dopasowania przestrzeni do Twoich potrzeb i stylu życia. 
                        <br/><br/>
                        W Mo.chi Design łączymy funkcjonalność z estetyką, skupiając się na kreacji wnętrz które nie tylko mają wyglądać pięknie i estetycznie, ale aby przede wszystkim dobrze się w nich mieszkało/żyło/ pracowało. Tworzymy przestrzenie pełne równowagi – takie, które dają poczucie komfortu, wyciszają i inspirują.
                        <br/><br/>
                        Wsłuchujemy się w potrzeby, dobieramy materiały, kolory i detale tak, aby wnętrze było dla Ciebie oazą spokoju i komfortu. Bo dom to coś więcej niż ściany i meble – <b>to przestrzeń, w której odnajdujesz spokój i energię do działania.</b>
                        <br/><br/>
                        <b>Za Mo.chi Design stoją dwie architektki – Magda i Michalina. Połączyły nas studia, przyjaźń oraz pasja do wnętrz. Każda z nas wnosi do Mo.chi unikalne cechy, które razem tworzą połączenie kreatywności, precyzji i wrażliwości na potrzeby klienta. Doświadczenie w projektowaniu zdobywałyśmy zarówno w trakcie studiów, jak i podczas pracy zawodowej.</b>
                        <br/><br/>
                        Na swoim koncie, oprócz projektów wnętrz domów oraz mieszkań, posiadamy projekty komercyjne oraz wnętrza pod inwestycje. Podejmiemy się różnych wyzwań i pomożemy Ci stworzyć Twoją wymarzoną przestrzeń.
                        <br/><br/>
                        <b>
                        Razem tworzymy duet, który w każdym wnętrzu szuka równowagi – między estetyką a funkcjonalnością, detalem a całością, sztuką a codziennością. Nasze wspólne podejście opiera się na zaprojektowaniu przestrzeni, w której można naprawdę poczuć się sobą.
                        </b>
                    </p>
            </section>
            <section className='section-about-us mt-16 flex-between mx-auto w-5/6'>
                <PortraitPanel 
                    name = "Michalina Mietlińska"
                    title = "mgr inż. architekt"
                    srcNoColor = {misiaNC}
                    srcColor = {misiaColor}
                    alt = "Interior designer Michalina Mietlińska – specialist in creating functional and aesthetic spaces."
                />
                <PortraitPanel
                    name = "Magdalena Teresiak"
                    title = "mgr inż. architekt"
                    srcNoColor = {madziaNC}
                    srcColor = {madziaColor}
                    alt = "Interior designer Magdalena Teresiak – expert in designing modern interiors, combining elegance with practicality."
                />
            </section>
            <section className="section-idea w-full center py-8 mt-24 text-mochi-orange bg-mochi-brown">
                <div className="">
                    <img className="mb-10 mx-auto" src={mail}></img>
                    <h1 className="mb-10">napisz do nas!</h1>
                    <p>
                        Dokonamy bezpłatnej wyceny projektu Twojego wymarzonego <br/> wnętrza lub odpowiemy na wszelkie wątpliwości.
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