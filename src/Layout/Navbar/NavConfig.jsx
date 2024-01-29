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
        subTitle: "Crafting Dynamic Websites for Engaging Online Experiences and Interaction.",
        iconDefault: <WebDevIconDefault />,
        iconHover: <WebDevIconHover />,
    },
    {
        id: 2,
        title: "Domain & Hosting",
        link: "/domain_hosting",
        subTitle: "Establishing Digital Presence with Secure Hosting and Domain Management.",
        iconDefault: <DomainHostIconDefault />,
        iconHover: <DomainHostIconHover />,
    },
    {
        id: 3,
        title: "Digital Marketing",
        link: "/digital_marketing",
        subTitle: "Expanding Brand Influence through Targeted Online Promotion Tactics.",
        iconDefault: <DigitalMarketingIconDefault />,
        iconHover: <DigitalMarketingIconHover />,
    },
    {
        id: 4,
        title: "Graphics",
        link: "/graphics",
        subTitle: "Enhancing Brand Identity with Engaging Visual Design Services.",
        iconDefault: <GraphicsIconDefault />,
        iconHover: <GraphicsIconHover />,
    },
    {
        id: 5,
        title: "Videography",
        link: "/videography",
        subTitle: "Telling Stories Through Professional Visual Storytelling Services.",
        iconDefault: <VideographyIconDefault />,
        iconHover: <VideographyIconHover />,
    },
    {
        id: 6,
        title: "Network Solution",
        link: "/network_solution",
        subTitle: "Enabling Seamless Connectivity with Customized Networking Infrastructure.",
        iconDefault: <NetworkSolutionIconDefault />,
        iconHover: <NetworkSolutionIconHover />,
    },
    {
        id: 7,
        title: "PBX",
        link: "/pbx",
        subTitle: "Optimizing Communication Channels with Advanced Telephony Systems.",
        iconDefault: <PBXIconDefault />,
        iconHover: <PBXIconHover />,
    }
];

export { main, services };