import TransitionsPage from "@/app/components/TransitionsPage"
import CircleImage from "../../components/Circle-image"
import Cover from "@/app/components/Cover"

import AvatarServices from "@/app/components/AvatarServices"

import SliderServices from "@/app/components/SliderServices"


const Servicios = () => {
  return (
    <>
     <Cover/>
      <TransitionsPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">

          <h1 className="mt-[150px] text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
          <p className=" px-2 mb-3 text-lg text-gray-300">Me dedico al desarrollo web frontend y creo sitios y aplicaciones que no solo se ven bien, sino que también funcionan de maravilla. Trabajo con tecnologías como HTML, CSS y JavaScript para diseñar interfaces que sean fáciles de usar, se adapten a cualquier dispositivo y capturen la esencia de la marca de cada cliente. Mi objetivo es ayudar a mejorar su imagen online y destacar en el mundo digital.</p>
          
        </div>
      <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
}
export default Servicios
