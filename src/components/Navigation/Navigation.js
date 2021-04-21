import { useState } from 'react'
import Navbar from "./Navbar/Navbar"
import classes from "./Navigation.module.sass"
import NavContext from "../../store/nav-context"
import SideDrawer from "./SideDrawer/SideDrawer"
const Navigation = props => {

    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

    const contextValue = {
        items: [{
            id: "about",
            path: "o-nas",
            name: "o nas"
        },
        {
            id: "offer",
            path: "oferta",
            name: "oferta"
        },
        {
            id: "showreel",
            path: "showreel",
            name: "showreel"
        }, {
            id: "video",
            path: "video",
            name: "video"
        },
        {
            id: "photo",
            path: "fotografia",
            name: "fotografia"
        },
        {
            id: "contact",
            path: "kontakt",
            name: "kontakt"
        },
        ],
        isSideDrawerOpen: isSideDrawerOpen
    }

    const toggleSideDrawerHandler = () => {

        return setIsSideDrawerOpen(prev => {

            return !isSideDrawerOpen
        })
    }
    return (
        <div className={classes.Navigation}>
            <NavContext.Provider value={contextValue}>
                <Navbar hamburgerClick={toggleSideDrawerHandler} />

                {isSideDrawerOpen && <SideDrawer />}
            </NavContext.Provider>
        </div>
    )
}

export default Navigation