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
                    height: '45vh',
                    marginTop: '1rem',
                    border: 'none'
                }}
                >
                    <h2 className="text-4xl">{title}</h2>
                    <hr />
                    <p className="text-3xl">{price} zł / m2</p>
                </motion.div>
                :
                <div className="offer-package">
                    <h2 className="text-3xl">{title}</h2>
                    <hr />
                    <p className="text-2xl">{price} zł / m2</p>
                </div>
            }
        </Link>
    )
}