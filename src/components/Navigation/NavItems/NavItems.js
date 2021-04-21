import { useContext } from 'react'
import NavContext from "../../../store/nav-context"
import NavItem from "../NavItem/NavItem"
import classes from './NavItems.module.sass';
const NavItems = props => {
    const context = useContext(NavContext);

    const showItems = () => {

        return context.items.map(item => {
            return <NavItem key={item.name} item={item} />
        })
    }
    return <ul className={classes.NavItems}>
        {showItems()}
    </ul>
}

export default NavItems