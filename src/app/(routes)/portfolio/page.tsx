import { dataPortfolio } from '../../../../data';

import AvatarPortfolio from "../../components/AvatarPortfolio";
import Container from "../../components/Container";
import PortfolioBox from "../../components/PortfolioBox";
import TransitionsPage from "@/app/components/TransitionsPage"
import CircleImage from "../../components/Circle-image"
import Cover from "@/app/components/Cover"



const PortfolioPage = () => {

    return (
        <Container>
            <Cover/>
            <TransitionsPage/>
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default PortfolioPage;
