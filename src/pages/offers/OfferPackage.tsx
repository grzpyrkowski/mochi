import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
    chose: boolean,
    title: string,
    src: string
}

export default function OfferPackage({chose, title, src} : Props) {

    return (
        <Link to={src} className="link-offer-package">
            { chose ?
                <motion.div 
                className="offer-package"
                animate = {{
                    color: '#EFEFEF', 
                    backgroundColor: '#D44E31', 
                    height: '34vh',
                    width: "105%",
                    x: "-0.5rem",
                    y: "-1.1rem",
                    border: 'none'
                }}
                transition={{
                    type: "tween"
                }}
                >
                    <h2 className="text-4xl">{title}</h2>
                </motion.div>
                :
                <div className="offer-package">
                    <h2 className="text-4xl">{title}</h2>
                </div>
            }
        </Link>
    )
}