import ContentBackdrop from "../../containers/ContentBackdrop/ContentBackdrop"
import Component from "../../containers/Component/Component"
import Image from "../../components/UI/Image/Image"
import classes from "./About.module.sass"

import Logo from "../../assets/images/logo/logo-02.png"

const About = props => {



    return <ContentBackdrop>
        <div className={classes.About}>

            <Image className={classes.Logo} image={{
                src: Logo
            }} />
            <h2>o nas</h2>
            <Component >
                <p>
                    Jako ekipa TOKLO Movie stanowimy dość niecodzienne, a z drugiej strony bardzo pożądane na rynku połączenie młodości z doświadczeniem. Jesteśmy młodym, zgranym i elastycznym w działaniu zespołem, który w ciągu ostatnich lat przeszedł drogę od zleceń dla małych, lokalnych przedsiębiorstw do współpracy z dużymi, międzynarodowymi firmami.
            </p>
            </Component>

            <Component>
                <p>
                    Film i fotografia towarzyszyły każdemu z nas już od czasów młodzieńczych, kiedy z zapałem chłonęliśmy wszelkie nowinki techniczne i bieżące trendy, a następnie wdrażaliśmy je w życie realizując coraz bardziej zaawansowane projekty. Podejście do pracy oparte na zaangażowaniu, pasji i sumienności, bardzo spodobało się naszym klientom. Dzięki temu, wielu z nich współpracuje z nami na stałe, m.in. uznane marki, takie jak Suzuki, blinkee.city, Cineworld.
            </p>
            </Component>

            <Component>
                <p>
                    Chętnie damy się zaprosić do Twojego świata i wspólnym wysiłkiem stworzymy mniejsze lub większe filmowe arcydzieło oraz profesjonalną fotorelację, które dostosowane będą do indywidualnych potrzeb oraz dostępnego budżetu. Bądźmy w kontakcie!
            </p>
            </Component>
        </div>
    </ContentBackdrop>
}

export default About