"use client"

import { transitionVariantPage } from "../../../utils/motion-transitions"
import { AnimatePresence, motion } from "framer-motion"

const TransitionsPage = () => {
  return (
    <AnimatePresence mode="wait">
    <div>
      <motion.div
       className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#151517]"
       
       variants={transitionVariantPage}
       initial="initial"
       animate="animate"
       exit="exit"
       transition={{delay: 0.1, duration:0.3, ease: "easeInOut"}}
       >
        
       </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default TransitionsPage
