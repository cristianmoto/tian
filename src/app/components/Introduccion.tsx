
"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

const Introduccion = () => {
    return (
        <div className="z-20 w-full p-5">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
               
                <div className="flex flex-col justify-center  max-w-md mt-14 ">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-center md:text-4xl md:mb-10 ">
                        Si puedes pensarlo,
                        <TypeAnimation
                        sequence={[
                            "puedes programarlo",
                            1000,
                            "puedes optimizarlo",
                            1000,
                            "puedes implementarlo",
                            1000,
                            "puedes desarrollarlo",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className=" block font-bold text-secondary"
                        />
                     </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-left">Soy desarrollador frontend y diseñador web, me apasiona crear experiencias visuales y funcionales que brillen. Transformo ideas en interfaces intuitivas y atractivas, cuidando hasta el último detalle.</p>
                </div>
                <Image src="/home-4.png" priority width={600} height={600} alt="profile" />
            </div>
        </div>
    )
}

export default Introduccion
