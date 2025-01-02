import { motion } from "framer-motion"
import { useState } from "react"
import sign from "../../data/pictures/layout/sign.svg"

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
    <div className="flex text-mochi-white place-content-center relative text-left">
            <motion.div 
                className="w-full h-full mx-10 mb-20 absolute blures"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={isHovered ? "hover" : "initial"}
                whileHover={{
                    backgroundColor: "#00000070",
                    backdropFilter: "blur(8px)"
                }}
                variants={variants}
            >
                <img className="absolute rounded-none w-6 top-12 right-12" src={sign}></img>
                <div className="absolute w-full bottom-1/4 top-1/2 ml-20">
                    <h2 className="text-2xl ml-5 mb-2">{title}</h2>
                    <hr className="w-4/5 mr-20 mb-2"/>
                    <p className="mb-5">{desc}</p>
                    <p className="year ">{year}</p>
                </div>
            </motion.div>
        <img className="mb-6 block" src={url} />
    </div>
    )
}