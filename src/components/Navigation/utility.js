import NavItem from "./NavItem/NavItem"
export const showItems = (items) => {

    return items.map(item => {
        return <NavItem key = {
            item.name
        }
        item = {
            item
        }
        />
    })
}