import main from '../../data/pictures/projects/living_room_main.png'
import small1 from '../../data/pictures/projects/living_room_small_1.png'
import small2 from '../../data/pictures/projects/living_room_small_2.png'
import small3 from '../../data/pictures/projects/living_room_small_3.png'

export default function LivingRoom() {
    return (
        <>
            <img src={main} className='center'></img>
            <div className='project-presentation mx-8'>
                <div className='photos w-3/5 relative'>
                    <img src={small1} />
                    <img src={small2} />
                    <img src={small3} />
                </div>
                <div className='description w-2/5'>
                    <div className='top-8 mt-8 sticky'>
                        <h3>Strefa dzienna w Luksemburgu</h3>
                        <p>Strefa dzienna domu w Luksemburgu to wnętrze, w którym naturalne materiały i subtelna paleta barw budują atmosferę spokoju i elegancji. Drewno ociepla przestrzeń, dodając jej przytulności, natomiast kamień wprowadza szlachetną fakturę i trwałość. Połączenie tych materiałów w otwartej kuchni podkreśla zróżnicowanie tekstur. Jasne, ciepłe odcienie równoważą całość, sprawiając, że wnętrze jest nie tylko estetyczne, ale i komfortowe w codziennym użytkowaniu. Dzięki starannie dobranym detalom i funkcjonalnym rozwiązaniom, przestrzeń ta staje się idealnym miejscem do relaksu i spotkań. W projekcie funkcjonalnym na życzenie klientki zadbałyśmy o odpowiednio dużą ilość miejsca do przechowywania - zarówno w niewielkiej kuchni, jak i w zabudowie w salonie.</p>
                    </div>
                </div>
            </div>
        </>
    )
}