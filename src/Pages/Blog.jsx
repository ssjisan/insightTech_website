import { Box, useMediaQuery } from '@mui/material'
import ComingSoon from '../Components/ComingSoon'
import NavForMobile from '../Layout/Navbar/NavForMobile'
import Navbar from '../Layout/Navbar/Navbar'

export default function Blog() {
    const forBelow1100 = useMediaQuery("(max-width:1100px)");

    return (
        <Box>
            {
                forBelow1100 ? <NavForMobile /> : <Navbar />
            }
            <ComingSoon />
        </Box>
    )
}
