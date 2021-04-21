import {
    useState,
    useEffect
} from 'react'

import classes from "./ContentBackdrop.module.sass"

const ContentBackdrop = props => {

    const [isVisible, setIsVisible] = useState(false)

    let visibleClass

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 500)

        return () => {
            setIsVisible(false)
            clearTimeout(timer)

        }
    }, []);

    isVisible ? visibleClass = classes.Show : visibleClass = null


    return <div className = {
            [classes.ContentBackdrop, visibleClass].join(" ")
        } > {
            props.children
        } <
        /div>
}

export default ContentBackdrop