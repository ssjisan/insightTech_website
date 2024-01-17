import { createContext } from "react";
import PropTypes from 'prop-types';
import MobileDrawer from "./Components/MobileDrawer";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { toggleDrawer, open, handleDrawerClose } = MobileDrawer()
    return (
        <DataContext.Provider
            value={{
                // Drawer for mobile
                toggleDrawer, open, handleDrawerClose
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