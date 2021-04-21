import { useContext } from 'react'
import classes from "./Hamburger.module.sass"
import NavContext from "../../../store/nav-context"
const Hamburger = props => {

    const context = useContext(NavContext);



    const activeClass = context.isSideDrawerOpen ? classes.Open : classes.Closed

    return <div className={classes.HamburgerWrapper}>
        <div onClick={props.click} className={[classes.Hamburger, activeClass].join(" ")}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
}

export default Hamburger