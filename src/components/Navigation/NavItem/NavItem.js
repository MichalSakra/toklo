import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.sass'

const NavItem = props => {

    const { item } = props

    return <li className={classes.NavItem} > <NavLink activeClassName={classes.Active} className={classes.Link} to={item.path}>{item.name}</NavLink></li>
}

export default NavItem