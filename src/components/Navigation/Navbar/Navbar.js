import NavItems from "../NavItems/NavItems"
import Hamburger from "../Hamburger/Hamburger"
import classes from './Navbar.module.sass'
const Navbar = props => {



    return (
        <nav className={classes.Navbar} >
            <NavItems />
            <Hamburger click={props.hamburgerClick} />
        </nav>
    )
}

export default Navbar