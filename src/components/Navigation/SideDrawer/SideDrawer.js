import { useContext } from "react"
import Backdrop from "./Backdrop"
import NavContext from "../../../store/nav-context"
import { showItems } from "../utility"
import classes from "./SideDrawer.module.sass"

const SideDrawer = () => {


    const context = useContext(NavContext);

    return (
        <Backdrop click={context.setSideDrawerOpen}>
            <ul className={[classes.SideDrawer, classes.SlideEffect].join(" ")}>

                {showItems(context.items)}

            </ul>
        </Backdrop>
    )
}

export default SideDrawer