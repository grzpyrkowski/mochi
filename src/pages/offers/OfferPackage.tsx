import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
    chose: boolean,
    title: string,
    price: number,
    src: string
}

export default function OfferPackage({chose, title, price, src} : Props) {

    return (
        <Link to={src} className="link-offer-package">
            { chose ?
                <motion.div 
                className="offer-package"
                animate = {{
                    color: '#EFEFEF', 
                    backgroundColor: '#D44E31', 
                    height: '44vh',
                    width: "105%",
                    x: "-0.5rem",
                    y: "-1.1rem",
                    border: 'none'
                }}
                transition={{
                    type: "tween"
                }}
                >
                    <h2 className="text-2xl">{title}</h2>
                    <hr />
                    <h3 className="text-2xl">{price} zł / m2</h3>
                </motion.div>
                :
                <div className="offer-package">
                    <h2 className="text-2xl">{title}</h2>
                    <hr />
                    <h3 className="text-2xl">{price} zł / m2</h3>
                </div>
            }
        </Link>
    )
}