import React from 'react';


const NavContext = React.createContext({
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
    isSideDrawerOpen: false
})

export default NavContext