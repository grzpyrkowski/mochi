import main from '../../data/pictures/projects/living_room_main.png'
import small1 from '../../data/pictures/projects/living_room_small_1.png'
import small2 from '../../data/pictures/projects/living_room_small_2.png'
import small3 from '../../data/pictures/projects/living_room_small_3.png'

export default function House() {
    return (
        <>
            <img src={main} className='center'></img>
            <div className='project-presentation mx-8'>
                <div className='photos w-3/5'>
                    <img src={small1}></img>
                    <img src={small2}></img>
                    <img src={small3}></img>
                </div>
                <div className='description w-2/5'>
                    <div className='top-8 mt-8 sticky'>
                        <h3>Dom pod Wrocławiem</h3>
                        <p>W tym projekcie domu pod Wrocławiem ciepłe beże i drewno budują atmosferę spokoju i harmonii. Jasne odcienie ścian i tkanin tworzą doskonałe tło dla naturalnych materiałów, które nadają wnętrzu ciepło i przytulność. Drewno pojawia się zarówno na podłogach, jak i w zabudowie meblowej. Otwarta przestrzeń dzienna sprzyja wspólnemu spędzaniu czasu, a subtelne akcenty dekoracyjne podkreślają nowoczesny, ale jednocześnie przyjazny charakter domu.</p>
                    </div>
                </div>
            </div>
        </>
    )
}