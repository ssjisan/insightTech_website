import { DigitalMarketingIcon, DomainHostIcon, GraphicsIcon, NetworkSolutionIcon, PBXIcon, VideographyIcon, WebDevIcon } from "../../Assets/ServiceIcons";

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
        icon: <WebDevIcon />
    },
    {
        id: 2,
        title: "Domain & Hosting",
        link: "/domain_hosting", 
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <DomainHostIcon />
    },
    {
        id: 3,
        title: "Digital Marketing",
        link: "/digital_marketing",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <DigitalMarketingIcon />
    },
    {
        id: 4,
        title: "Graphics",
        link: "/graphics",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <GraphicsIcon />
    },
    {
        id: 5,
        title: "Videography",
        link: "/videography",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <VideographyIcon />
    },
    {
        id: 6,
        title: "Network Solution",
        link: "/network_solution",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <NetworkSolutionIcon />
    },
    {
        id: 7,
        title: "PBX",
        link: "/pbx",
        subTitle: "Crafting Dynamic Digital Experiences through Innovative Web Solutions",
        icon: <PBXIcon />
    }
];

export { main, services };