import { useState, useEffect } from "react"
import Logo from "../../assets/images/logo/logo-01.png"
import Image from "../../components/UI/Image/Image"
import classes from "./Home.module.sass"


const Home = () => {

    const [imgIsVisible, setImgIsVisible] = useState(false)

    let visibleClass

    useEffect(() => {
        const timer = setTimeout(() => {
            setImgIsVisible(true)
        }, 1000)

        return () => {
            clearTimeout(timer)

        }
    }, [imgIsVisible]);

    imgIsVisible ? visibleClass = classes.Show : visibleClass = classes.Hide




    return <div className={classes.Home} >

        <Image className={[classes.Image, visibleClass].join(" ")} image={{
            src: Logo,
            alt: "Toklo movie - producja foto video. Logo"
        }} />


    </div>
}

export default Home