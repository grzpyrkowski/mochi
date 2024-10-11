import wspolne2 from '../data/pictures/about/wspolne_2.png';
import misianc from '../data/pictures/about/misia_nc.png';
import madzianc from '../data/pictures/about/madzia_nc.png';
import mail from '../data/pictures/about/envelope.svg';

export default function About() {
    return (
        <>
            <section className='section-about-banner relative flex'>
                <img className='block' src={wspolne2}></img>
                <h1 className='absolute z-10 text-left left-20 top-1/2'>poznajmy się!</h1>
            </section>
            <section className='section-about-desc mt-28 text-left w-4/5 center flex-col'>
                <div>
                    <p>
                        Hej, z tej strony Magda i Michalina z mo.chi design - bardzo nam miło, że zechciałeś/aś odwiedzić naszą stronę :)<br/><br/>
                        Jesteśmy pracownią zajmującą się projektami wnętrz - posiadamy doświadczenie w projektach wnętrz zarówno prywatnych, 
                        jak i komercyjnych czy inwestycyjnych - nie boimy się nowych wyzwań!<br/><br/>
                        Na co dzień pracujemy zdalnie (chyba, że projekt znajduje się w obrębie Wrocławia, Krakowa lub okolic), 
                        natomiast wszelkie wstępne pomiary oraz inwentaryzacje wykonujemy osobiście z dojazdem- odległość nie jest dla nas w żadnym przypadku przeszkodą!<br/><br/>
                        Najważniejszy dla nas jest Twój komfort - wybierając nas  do swojego projektu, 
                        zadbamy o harmonię zastosowanych rozwiązań, ergonomię i dostosowanie wnętrza pod Twoje preferencje. 
                        Kierując się tymi wartościami, stworzymy dla Ciebie idealne wnętrze - zarówno funkcjonalne jak i atrakcyjne wizualnie.
                    </p>
                    <button className="mochi-button mt-8">sprawdź naszą ofertę</button>
                </div>
            </section>
            <section className='section-about-us mt-24 flex mx-auto place-content-between w-4/5'>
                <img src={misianc}></img>
                <img src={madzianc}></img>
            </section>
            <section className="section-idea center mt-24 text-mochi-orange bg-mochi-brown">
                <div className="my-36 w-2/3">
                    <img className="mb-10 mx-auto" src={mail}></img>
                    <h1 className="mb-10">napisz do nas!</h1>
                    <p>
                        Dokonamy bezpłatnej wyceny projektu Twojego wymarzonego <br/> wnętrza lub odpowiemy na wszelkie wątpliwości.
                    </p>
                    <button className="mochi-button mt-8">sprawdź naszą ofertę</button>
                </div>
            </section>
        </>
    )
}