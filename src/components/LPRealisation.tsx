import { motion } from "framer-motion"
import { useState } from "react"

type Props = {
    url: string,
    title: string,
    desc: string,
    year: number
}

export default function LPRealisation({url, title, desc, year}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter() {
        setIsHovered(true);
      }
    
      function handleMouseLeave() {
        setIsHovered(false);
      }

      const variants = {
        hover: {
            opacity: 100
        },
        initial: {
            opacity: 0
        }
      }

    return (
    <div className="relative flex text-mochi-white place-content-center" >
        <img className="mb-6 block" src={url} />
        <motion.div 
            className="blures place-content-end absolute z-10 text-left w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={isHovered ? "hover" : "initial"}
            whileHover={{
                backgroundColor: "#00000070",
                backdropFilter: "blur(8px)"
            }}
        >
            <motion.div 
                className="ml-20 mb-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={isHovered ? "hover" : "initial"}
                variants={variants}
            >
                <h2 className="text-2xl mb-2">{title}</h2>
                <hr className="mr-20 mb-2"/>
                <p className="mb-5">{desc}</p>
                <p className="year ">{year}</p>
            </motion.div>
        </motion.div>
    </div>
    )
}