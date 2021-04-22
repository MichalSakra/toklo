import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Placeholder from "../../components/UI/Placeholder"
const Component = props => {






    return <LazyLoadComponent className={props.className || null} placeholder={<Placeholder />}>
        {props.children}
    </LazyLoadComponent>
}

export default Component