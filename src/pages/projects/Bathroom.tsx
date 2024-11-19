import main from '../../data/pictures/projects/living_room_main.png'
import small1 from '../../data/pictures/projects/living_room_small_1.png'
import small2 from '../../data/pictures/projects/living_room_small_2.png'
import small3 from '../../data/pictures/projects/living_room_small_3.png'

export default function Bathroom() {
    return (
        <>
            <img src={main} className='center'></img>
            <div className='project-presentation mx-8'>
                <div className='photos w-3/5'>
                    <img src={small1}></img>
                    <img src={small2}></img>
                    <img src={small3}></img>
                </div>
                <div className='description w-2/5 mt-28'>
                    <h1>Łazienka</h1>
                    <p>tutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad 
                        oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad 
                        oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad 
                        oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad oisbscihfcnhfihnsiltutaj kó®tki opis projektu blabaoc asapdnqdoiasbdnsadiosad
                        oisbscihfcnhfihnsil</p>
                </div>
            </div>
        </>
    )
}