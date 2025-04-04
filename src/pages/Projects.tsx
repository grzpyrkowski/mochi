import { useParams } from "react-router";
import ProjectPanel from "./projects/ProjectPanel";
import LivingRoom from "./projects/LivingRoom";
import Flat from "./projects/Flat";
import House from "./projects/House";
import living_room from "../data/pictures/projects/cropped_realisation_1.png"
import bathroom from "../data/pictures/projects/cropped_realisation_2.png"
import kitchen from "../data/pictures/projects/cropped_realisation_3.png"
import ScrollToTop from "./components/ScrollToTop";

export default function Projects() {
    let param = useParams();

    return (
        <>
            <ScrollToTop />
            <section className="projects-header">
                <div className="my-36 text-left text-mochi-orange ml-40 w-2/3">
                    <h1>wybrane realizacje</h1>
                    <p className="my-10 mx-0">
                        Poznaj wybrane projekty, które świadczą o naszym zaangażowaniu, kreatywności i profesjonalizmie. 
                        Aby zobaczyć pełne portfolio, odwiedź nasz profil na <a href=''><u>Behance</u></a>, gdzie znajdziesz więcej inspirujących realizacji.
                    </p>
                </div>
            </section>
            <section className="project-choose-project flex-between text-mochi-white">
                <ProjectPanel 
                    projectId = 'strefa-dzienna-w-Luksemburgu'
                    linkUrl = '/projekty/strefa-dzienna-w-Luksemburgu'
                    pictureUrl = {living_room}
                    title = 'Strefa dzienna w Luksemburgu'
                    year = {2025}
                />
                <ProjectPanel 
                    projectId = 'mieszkanie-w-Warszawie'
                    linkUrl = '/projekty/mieszkanie-w-Warszawie'
                    pictureUrl = {bathroom}
                    title = 'Mieszkanie w Warszawie'
                    year = {2024}
                />
                <ProjectPanel 
                    projectId = 'dom-pod-Wroclawiem'
                    linkUrl = '/projekty/dom-pod-Wroclawiem'
                    pictureUrl = {kitchen}
                    title = 'Dom pod Wrocławiem'
                    year = {2024}
                />
            </section>
            <section className="project-outlet">
                {(() => {
                        if (param.id === "strefa-dzienna-w-Luksemburgu") {
                            return (
                                <LivingRoom />
                            )
                        } else if (param.id === "mieszkanie-w-Warszawie") {
                            return (
                                <Flat />
                            )
                        } else if (param.id === "dom-pod-Wroclawiem") {
                            return (
                                <House />
                            )
                        } else {
                            return (
                                <h1 className="mt-20 text-4xl">Wybierz projekt, który chcesz obejrzeć</h1>
                            )
                        }
                    })()
                }
            </section>
        </>
    )
}