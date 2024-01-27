import { Box } from "@mui/material";
import Slider from "react-slick";

export default function ProjectShowSliderReverse() {
    const imageUrls = [
        'https://i.ibb.co/5Ydv6cw/9.png',
        'https://i.ibb.co/x3FpwqX/1.png',
        'https://i.ibb.co/2jHFRMB/2.png',
        'https://i.ibb.co/jzJhGqr/3.png',
        'https://i.ibb.co/bvz9d15/4.png',
        'https://i.ibb.co/vQH6Y3z/5.png',
        'https://i.ibb.co/5971WW4/6.png',
        'https://i.ibb.co/gWsHpdy/7.png',
        'https://i.ibb.co/R2Xzg1R/8.png'
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,      
        pauseOnHover: true,
        cssEase: "linear",
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} style={{ width: "98%" }}>
            {
                imageUrls.map((data) => {
                    return (
                        <Box sx={{ width: "384px", height: "280px", overflow:"hidden"}} key={data.index}>
                            <img src={data} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                        </Box>
                    )
                })
            }
        </Slider>
    )
}
