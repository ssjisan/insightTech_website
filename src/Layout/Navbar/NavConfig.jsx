import {
    DigitalMarketingIconDefault,
    DigitalMarketingIconHover,
    DomainHostIconDefault,
    DomainHostIconHover,
    GraphicsIconDefault,
    GraphicsIconHover,
    NetworkSolutionIconDefault,
    NetworkSolutionIconHover,
    PBXIconDefault,
    PBXIconHover,
    VideographyIconDefault,
    VideographyIconHover,
    WebDevIconDefault,
    WebDevIconHover
} from "../../Assets/ServiceIcons";

const main = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About Us",
        link: "/about_us"
    },
    {
        id: 3,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 4,
        title: "Blog",
        link: "/blog",
    },
];

const services = [
    {
        id: 1,
        title: "Web Development",
        link: "/web_development",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <WebDevIconDefault />,
        iconHover: <WebDevIconHover />,
    },
    {
        id: 2,
        title: "Domain & Hosting",
        link: "/domain_hosting",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <DomainHostIconDefault />,
        iconHover: <DomainHostIconHover />,
    },
    {
        id: 3,
        title: "Digital Marketing",
        link: "/digital_marketing",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <DigitalMarketingIconDefault />,
        iconHover: <DigitalMarketingIconHover />,
    },
    {
        id: 4,
        title: "Graphics",
        link: "/graphics",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <GraphicsIconDefault />,
        iconHover: <GraphicsIconHover />,
    },
    {
        id: 5,
        title: "Videography",
        link: "/videography",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <VideographyIconDefault />,
        iconHover: <VideographyIconHover />,
    },
    {
        id: 6,
        title: "Network Solution",
        link: "/network_solution",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <NetworkSolutionIconDefault />,
        iconHover: <NetworkSolutionIconHover />,
    },
    {
        id: 7,
        title: "PBX",
        link: "/pbx",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        iconDefault: <PBXIconDefault />,
        iconHover: <PBXIconHover />,
    }
];

export { main, services };