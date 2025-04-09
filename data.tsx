import { BookText, CodeSquare, HomeIcon, UserRound, Crop, Pencil, Computer} from 'lucide-react';
import Behance from "./assets/Behance"
import Insta from "./assets/Instagram"
import Linkedin from "./assets/Linkedin"
import TwitterX from "./assets/TwitterX"


export const socialNetworks = [
    {
        id: 1,
        logo: <Behance  strokeWidth={1} />,
        src: "https://www.behance.net/dev_aguirrecristian",
    },
    {
        id: 2,
        logo: <Insta  strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Linkedin strokeWidth={1} />,
        src: "https://www.linkedin.com/in/cristian-e-aguirre/",
    },
    {
        id: 4,
        logo: <TwitterX strokeWidth={1} />,
        src: "https://x.com/_TianDev",
    }
    
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Web Developer",
        subtitle: "Dorian Graphic",
        description: "Colabore con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "mar 2014 ",
    },
    {
        id: 2,
        title: "Web Developer",
        subtitle: "The Wine Shop",
        description: "Desarrollo de la Web institucional y mantenimiento del catalogo de productos ",
        date: "sep 2016",
    },
    {
        id: 3,
        title: "Web Developer & Diseño Grafico",
        subtitle: "Mundo Ciudadanias",
        description: "Encargado de crear la web institucional de la marca, como el logo y la piezas graficas , internas y externas ",
        date: "Mayo 2020",
    },
    {
        id: 4,
        title: "Practica  en Santex Academy",
        subtitle: "Santex Academy",
        description: "Desarrollo de una web instucional para una municipalidad en el framework Angular.",
        date: "Agos 2021",
    },
    {
        id:5,
        title: "Freelance",
        subtitle: "Varios.",
        description: "trabajos de diseño grafico , diseño multimedial, con la Suite de Adobe y  webs particulares, tanto en React como tambien en Js ",
        date: "Ene 2025",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 12,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
   
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
  
  
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Mundo Cafe",
        image: "/image-1.jpg",
       
        urlDemo: "https://mundo-cafe-msqh.vercel.app/",
    },
    {
        id: 2,
        title: "Cafe Martinez",
        image: "/image-2.jpg",
       
        urlDemo: "https://cafeteriamartinez.vercel.app/",
    
    }
];
<h1>Me dedico al desarrollo web frontend y creo sitios y aplicaciones que no solo se ven bien, sino que también funcionan de maravilla. Trabajo con tecnologías como HTML, CSS y JavaScript para diseñar interfaces que sean fáciles de usar, se adapten a cualquier dispositivo y capturen la esencia de la marca de cada cliente. Mi objetivo es ayudar a mejorar su imagen online y destacar en el mundo digital.</h1>