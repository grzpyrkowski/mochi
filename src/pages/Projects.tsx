import { useParams } from "react-router";
import ProjectPanel from "./projects/ProjectPanel";
import LivingRoom from "./projects/LivingRoom";
import Kitchen from "./projects/Kitchen";
import Bathroom from "./projects/Bathroom";
import living_room from "../data/pictures/projects/cropped_realisation_1.png"
import bathroom from "../data/pictures/projects/cropped_realisation_2.png"
import kitchen from "../data/pictures/projects/cropped_realisation_3.png"

export default function Projects() {
    let param = useParams();

    return (
        <>
            <section className="projects-header">
                <div className="my-36 text-left text-mochi-orange ml-40 w-2/3">
                    <h1>wybrane realizacje</h1>
                    <p className="my-10 mx-0">
                        Poznaj wybrane projekty, które świadczą o naszym zaangażowaniu, kreatywności i profesjonalizmie. 
                        Aby zobaczyć pełne portfolio, odwiedź nasz profil na <a href=''><u>Behance</u></a>, gdzie znajdziesz więcej inspirujących realizacji.
                    </p>
                </div>
            </section>
            <section className="project-choose-project flex-between mx-8 text-mochi-white">
                <ProjectPanel 
                    projectId = 'salon'
                    linkUrl = '/projekty/salon'
                    pictureUrl = {living_room}
                    title = 'Salon w kamienicy'
                    year = {2024}
                />
                <ProjectPanel 
                    projectId = 'lazienka'
                    linkUrl = '/projekty/lazienka'
                    pictureUrl = {bathroom}
                    title = 'Łazienka'
                    year = {2023}
                />
                <ProjectPanel 
                    projectId = 'kuchnia'
                    linkUrl = '/projekty/kuchnia'
                    pictureUrl = {kitchen}
                    title = 'Kuchnia'
                    year = {2022}
                />
            </section>
            <section className="project-outlet">
                {(() => {
                        if (param.id === "salon") {
                            return (
                                <LivingRoom />
                            )
                        } else if (param.id === "kuchnia") {
                            return (
                                <Kitchen />
                            )
                        } else if (param.id === "lazienka") {
                            return (
                                <Bathroom />
                            )
                        } else {
                            return (
                                <h1 className="mt-20 text-4xl">Wybierz proszę projekt, który chcesz obejrzeć</h1>
                            )
                        }
                    })()
                }
            </section>
        </>
    )
}