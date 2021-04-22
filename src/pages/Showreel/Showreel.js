import { useContext } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import classes from "./Showreel.module.sass"
import PortfolioContext from "../../store/portfolio-context"
import ContentBackdrop from "../../containers/ContentBackdrop/ContentBackdrop"
import Component from "../../containers/Component/Component"
const Showreel = () => {

    const context = useContext(PortfolioContext);
    const showVideos = () => {
        return context.showreel.map(video => {
            return <Component key={video.id}>
                <h2>{video.name}</h2>
                <Vimeo
                    showTitle={false}
                    className={classes.Video}
                    video={video.id}
                    responsive={true}
                    controls={false}
                    showPortrait={false}
                />
            </Component>
        })

    }


    return <ContentBackdrop >
        <div className={classes.Showreel}>

            {showVideos()}
        </div>
    </ContentBackdrop>
}

export default Showreel