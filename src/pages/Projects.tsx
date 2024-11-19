import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { motion } from "framer-motion";
import living_room from "../data/pictures/projects/cropped_realisation_1.png"
import bathroom from "../data/pictures/projects/cropped_realisation_2.png"
import kitchen from "../data/pictures/projects/cropped_realisation_3.png"


export default function Projects() {
    return (
        <>
            <section className="projects-header">
                <div className="my-36 text-left text-mochi-orange ml-40 w-2/3">
                    <h1>wybrane realizacje</h1>
                    <p className="my-10">
                        Poznaj wybrane projekty, które świadczą o naszym zaangażowaniu, kreatywności i profesjonalizmie. 
                        Aby zobaczyć pełne portfolio, odwiedź nasz profil na <a href=''><u>Behance</u></a>, gdzie znajdziesz więcej inspirujących realizacji.
                    </p>
                </div>
            </section>
            <section className="project-choose-project flex mx-8 place-content-between">
                <Link to='/projekty'>
                    <motion.img 
                        src={living_room}
                        whileHover={{
                            scale: 1.05
                        }}
                    ></motion.img>
                </Link>
                <Link to='/projekty/lazienka'>
                    <motion.img 
                        src={bathroom}
                        whileHover={{
                            scale: 1.05
                        }}
                    ></motion.img>
                </Link>
                <Link to='/projekty/kuchnia'>
                    <motion.img 
                        src={kitchen}
                        whileHover={{
                            scale: 1.05
                        }}
                    ></motion.img>
                </Link>
            </section>
            <section className="project-outlet">
                <Outlet />
            </section>
        </>
    )
}