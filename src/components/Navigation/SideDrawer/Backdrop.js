import classes from "./SideDrawer.module.sass"

const Backdrop = (props) => {


    return <div onClick={props.click} className={classes.Backdrop}>{props.children}</div>
}

export default Backdrop