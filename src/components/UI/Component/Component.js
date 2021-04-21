import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Placeholder from "../Placeholder"
const Component = props => {






    return <LazyLoadComponent placeholder={<Placeholder />}>
        {props.children}
    </LazyLoadComponent>
}

export default Component