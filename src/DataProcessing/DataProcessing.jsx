import { createContext } from "react";
import PropTypes from 'prop-types';
import MobileDrawer from "./Components/MobileDrawer";
import Testimonial from "./Components/Testimonial";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { toggleDrawer, open, handleDrawerClose } = MobileDrawer()
    const { sliderRef, nextSlide, prevSlide } = Testimonial()
    return (
        <DataContext.Provider
            value={{
                // Drawer for mobile
                toggleDrawer, open, handleDrawerClose,
                // Testimonial Controller
                sliderRef, nextSlide, prevSlide
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
// Prop types validation
DataProcessing.propTypes = {
    children: PropTypes.node.isRequired,
};