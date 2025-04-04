import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import sign from "../../data/pictures/layout/sign.svg";

type Props = {
    projectId: string,
    linkUrl: string,
    pictureUrl: string,
    title: string,
    year: number
}

export default function ProjectPanel({projectId, linkUrl, pictureUrl, title, year} : Props) {
    let param = useParams();

    return (
        <Link to={linkUrl} className="project-panel relative">
            {
                (projectId === param.id) ? 
                <>
                    <div className="absolute z-10 w-full h-full grid center shade">
                        <div>
                            <img src={sign} className="w-1/12 rounded-none mx-auto mb-8"/>
                            <h2 className="text-xl">{title}</h2>
                            <p>{year} r</p>
                        </div>
                    </div>
                    <img src={pictureUrl} className="block"></img>
                </>
                :
                <>
                    <motion.div 
                        className="absolute z-10 w-full h-full grid center shadeAndBlur"
                        whileHover={{
                            backgroundColor: "#00000040"
                        }}
                    >
                        <div>
                            <img src={sign} className="w-1/12 rounded-none mx-auto mb-8"/>
                            <h2 className="text-xl">{title}</h2>
                            <p>{year} r</p>
                        </div>
                    </motion.div>
                    <img src={pictureUrl} className="block"></img>
                </>
           }
        </Link>
    )
}