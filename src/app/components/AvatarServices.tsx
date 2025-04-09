import Image from "next/image"
import Transitions from "./Transitions"

const AvatarServices = () => {
  return (
   <Transitions position="bottom"className="bottom-0 left-0 hidden md:inline-block md:absolute" >
    <Image src="/Avatar2.png"width="300" height="300" className="w-[250px] h-full " alt="Particles " />
   </Transitions>
  )
}

export default AvatarServices