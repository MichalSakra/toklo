import NavItems from "../NavItems/NavItems"
import Hamburger from "../Hamburger/Hamburger"
import classes from './Navbar.module.sass'
const Navbar = props => {



    return (
        <div className={classes.Navbar} >
            <NavItems />
            <Hamburger click={props.hamburgerClick} />
        </div>
    )
}

export default Navbar