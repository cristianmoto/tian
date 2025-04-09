
import Image from "next/image"
import Transitions from "./Transitions"

const Avatar = () => {
  return (
   <Transitions position="bottom"className="bottom-0 right-0 hidden md:inline-block md:absolute" >
    <Image src="/Avatar.png" width={400} height={400} className="w-full h-full" alt="Avatar"/>
   </Transitions>
  )
}

export default Avatar
