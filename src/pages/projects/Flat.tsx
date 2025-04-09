import main from '../../data/pictures/projects/living_room_main.png'
import small1 from '../../data/pictures/projects/living_room_small_1.png'
import small2 from '../../data/pictures/projects/living_room_small_2.png'
import small3 from '../../data/pictures/projects/living_room_small_3.png'

export default function Flat() {
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
                        <h3>Mieszkanie w Warszawie</h3>
                        <p>Nowoczesne mieszkanie w Warszawie to przestrzeń, w której dominują szarości połączone z brązem – od jasnych, subtelnych odcieni po głębokie tonacje. Starannie dobrane materiały, takie jak beton, stal i szkło, nadają wnętrzu surowego charakteru, natomiast elementy drewniane poczucie przytulności. Minimalistyczne formy i funkcjonalne rozwiązania podkreślają nowoczesny styl, a starannie dobrane oświetlenie buduje atmosferę. Całość to połączenie estetyki i wygody. </p>
                    </div>
                </div>
            </div>
        </>
    )
}