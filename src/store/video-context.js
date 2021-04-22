import React from 'react';


import promo1 from '../assets/images/video/promo/1.jpg'
import promo2 from '../assets/images/video/promo/2.jpg'
import promo3 from '../assets/images/video/promo/3.jpg'
import promo4 from '../assets/images/video/promo/4.jpg'
import promo5 from '../assets/images/video/promo/5.jpg'
import promo6 from '../assets/images/video/promo/6.jpg'
import promo7 from '../assets/images/video/promo/7.jpg'
import promo8 from '../assets/images/video/promo/8.jpg'
import event1 from '../assets/images/video/event/1.jpg'
import event2 from '../assets/images/video/event/2.jpg'
import event3 from '../assets/images/video/event/3.jpg'
import event4 from '../assets/images/video/event/4.jpg'
import event5 from '../assets/images/video/event/5.jpg'
import event6 from '../assets/images/video/event/6.jpg'
import event7 from '../assets/images/video/event/7.jpg'
import event8 from '../assets/images/video/event/8.jpg'



const VideoContext = React.createContext({

    promo: [{
            id: "promo1",
            href: "https://www.youtube.com/watch?v=7ojfih0_aNc&t",
            imgSrc: promo1,
            text: "Suzuki Hybrid 2017"
        },

        {
            id: "promo2",
            href: "https://www.youtube.com/watch?v=1Q7p_rICnJU&t",
            imgSrc: promo2,
            text: "Szkoła Jazdy SQULL Promotion Movie"
        },

        {
            id: "promo3",
            href: "https://www.youtube.com/watch?v=Q8Z98HmobjM",
            imgSrc: promo3,
            text: "SUZUKI SWIFT Car Promotion Movie 2018"
        },

        {
            id: "promo4",
            href: "https://www.youtube.com/watch?v=Z2neeYxI6EE&t=",
            imgSrc: promo4,
            text: "SUZUKI 4x4 Allgrip"
        },

        {
            id: "promo5",
            href: "https://www.youtube.com/watch?v=yEXAsW4KGx8&t=&fbclid=IwAR1vs2eNqOM_h_4CobNv_7hW6yqe3cmYPc256_SNepiZV8T58LUUd9SBq08",
            imgSrc: promo5,
            text: "KING of FRANCE 2019 "
        },

        {
            id: "promo6",
            href: "https://www.youtube.com/watch?v=1y5PKNYKvK8",
            imgSrc: promo6,
            text: "SUZUKI JIMNY Promotion Movie 2019"
        },
        {
            id: "promo7",
            href: "https://www.youtube.com/watch?v=BgoW_mlClgI",
            imgSrc: promo7,
            text: "OKUAKU Video lookbook 1.0"
        },

        {
            id: "promo8",
            href: "https://www.youtube.com/watch?v=W_oT9gkPAnU",
            imgSrc: promo8,
            text: "DRONE REEL Toklo 2017- 2018"
        }
    ],

    events: [{
            id: "promo9",
            href: "https://www.youtube.com/watch?v=BuyV9elqDMY",
            imgSrc: event1,
            text: "Pożegnanie dworca PKS w Kielcach"
        },

        {
            id: "event1",
            href: "https://www.youtube.com/watch?v=S6cCnXuVqzg",
            imgSrc: event2,
            text: "Kadzielnia Sport Festiwal 2018 official aftermovie"
        },

        {
            id: "event2",
            href: "https://www.youtube.com/watch?v=qMMP8OTNqKg",
            imgSrc: event3,
            text: "IDO 2018 World Championship"
        },

        {
            id: "event3",
            href: "https://www.youtube.com/watch?v=VE2CRoMW7TQ&t",
            imgSrc: event4,
            text: "Warsaw Motorcycle Show 2019 - Suzuki"
        },

        {
            id: "event4",
            href: "https://www.youtube.com/watch?v=7n1oX40uvOU&t",
            imgSrc: event5,
            text: "Polska - Holandia 2019 video for Suzuki"
        },

        {
            id: "event5",
            href: "https://www.youtube.com/watch?v=N-6UGbNButk&t",
            imgSrc: event6,
            text: "TT Technology on Agrotech"
        },
        {
            id: "event6",
            href: "https://www.youtube.com/watch?v=Pu22MExn0YE&t",
            imgSrc: event7,
            text: "Suzuki on Poznań Motor Show 2019"
        },

        {
            id: "event7",
            href: "https://www.youtube.com/watch?v=0Q1FOynscqw&t",
            imgSrc: event8,
            text: "Mecz Polska - Niemcy 2019"
        }
    ],

    clips: [{
            href: "https://www.youtube.com/watch?v=Kq-NtkgeG4E",
            imgSrc: "img/portfolio/event/1.jpg",
            text: 'KYÖKU x ESSEX "WHO"'
        },

        {
            href: "https://www.youtube.com/watch?v=OZFiji2GmUw",
            imgSrc: "img/portfolio/event/2.jpg",
            text: 'Marcin Patrzałek "Hush"'
        }
    ]


})

export default VideoContext