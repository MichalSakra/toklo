import { LazyLoadImage } from 'react-lazy-load-image-component';
import Placeholder from "../Placeholder"
const Image = (props) => {

    const { image } = props
    return <div >
        <LazyLoadImage placeholder={<Placeholder />} className={props.className} src={image.src} alt={image.alt} />
        <span></span>
    </div>
}
export default Image