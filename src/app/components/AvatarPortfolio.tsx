"use client"

import Image from 'next/image';
import Transitions from './Transitions';

const AvatarPortfolio = () => {
    return (
        <Transitions position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/AvatarWork.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </Transitions>

    );
}

export default AvatarPortfolio;