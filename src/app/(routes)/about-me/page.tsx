import Container from "@/app/components/Container"
import TransitionsPage from "@/app/components/TransitionsPage"
import Cover from "../../components/Cover"
import Avatar from "@/app/components/Avatar"
import Counter from "@/app/components/Counter"
import TimeLine from "@/app/components/Time-line"

const PageAboutMe = () => {
  return (
    <>

      <TransitionsPage />
      <Cover />
      <Container>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi {''} <span className="font-bold text-secondary"> trayectoria profesional</span>
        </h1>
        <Counter/>
       <TimeLine/>
      </Container>
    </>
  )
}

export default PageAboutMe