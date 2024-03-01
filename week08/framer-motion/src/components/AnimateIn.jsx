'use client'

import {motion} from 'framer-motion'

export default function AnimateIn({children, direction = 'left'}) {
    let startX = direction === 'left' ? '-25%' : '25%'
    console.log(startX, children)
    return(
        <motion.div
            initial={{opacity: 0, x: startX, scale: 0.7}}
            whileInView={{opacity: 1, x: '0%', scale: 1}}
            viewport={{once : false}}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    )
}
