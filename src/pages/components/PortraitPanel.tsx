import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
    name: string,
    title: string,
    description: string,
    srcNoColor: string,
    srcColor: string,
    alt: string
}

export default function PortraitPanel({name, title, description, srcNoColor, srcColor, alt} : Props) {
    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter() {
        setIsHovered(true);
      }
    
      function handleMouseLeave() {
        setIsHovered(false);
      }

      const variants = {
        hover: {
            opacity: 0
        },
        initial: {
            opacity: 100
        }
      }

    return (
        <div 
            className='relative mx-2 about-portrait'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute w-full h-full z-10 text-left'>
                <p>
                    <span className='uppercase'>{name}</span>
                    <br />
                    <span>{title}</span>
                </p>
                <p className="bottom-0">
                    {description}
                </p>
            </div>
            <motion.img
                src={srcNoColor}
                className='absolute z-1'
                animate={isHovered ? "hover" : "initial"}
                variants={variants}
            />
            <img src={srcColor} alt={alt} className='block'/>
        </div>
    )
}