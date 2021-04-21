import { useContext } from 'react'
import NavContext from "../../../store/nav-context"
import classes from './NavItems.module.sass';
import { showItems } from "../utility"
const NavItems = props => {
    const context = useContext(NavContext);


    return <ul className={classes.NavItems}>
        {showItems(context.items)}
    </ul>
}

export default NavItems