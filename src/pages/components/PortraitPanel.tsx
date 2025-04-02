import { useState } from "react";
import { motion } from "framer-motion";
import linkedin from '../../data/pictures/about/linkedin.svg';

type Props = {
    name: string,
    title: string,
    srcNoColor: string,
    srcColor: string,
    alt: string
}

export default function PortraitPanel({name, title, srcNoColor, srcColor, alt} : Props) {
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
            className='relative mx-2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute w-full z-10 flex-between'>
                <p className='text-left'>
                    <span className='uppercase'>{name}</span>
                    <br/>
                    <span>{title}</span>
                </p>
                <p><img src={linkedin} alt={alt}/></p>
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