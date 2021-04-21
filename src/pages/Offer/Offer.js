import ContentBackdrop from "../../components/UI/ContentBackdrop/ContentBackdrop"
import Component from "../../components/UI/Component/Component"
import Image from "../../components/UI/Image/Image"
import classes from "./Offer.module.sass"

import Logo from "../../assets/images/logo/logo-02.png"

const Offer = props => {



    return <ContentBackdrop>
        <div className={classes.Offer}>
            <h2>Co możemy dla Ciebie zrobić?</h2>
            <Component >

                <p>
                    Zajmujemy się realizacją profesjonalnych produkcji filmowych i fotograficznych.
                    Dzięki zdobytemu w trakcie kilkudziesięciu projektów doświadczeniu, działamy sprawnie i terminowo, wdrażając jednocześnie wiele kreatywnych rozwiązań.
            </p>
            </Component>

            <Component>
                <p>
                    Jesteśmy na bieżąco z nowinkami technologicznymi i współczesnymi trendami w filmowaniu, co przenosimy każdego dnia na tworzone przez nas filmy. Dysponujemy wysokiej klasy sprzętem, m.in. kamerami cyfrowymi oraz dronem do zdjęć lotniczych, co gwarantuje najwyższą jakość filmu. Przykłady naszych realizacji możesz zobaczyć w dziale „portfolio”.
            </p>
            </Component>

            <Component>
                <p>
                    Profesjonalnie przeprowadzimy Cię przez cały proces tworzenia filmu – od wsparcia w tworzeniu scenariusza, przez pomoc w logistyce i organizacji planu zdjęciowego, po filmowanie i końcowy montaż. Jeśli świat po drugiej stronie kamery jest Ci totalnie obcy lub po prostu nie masz pomysłu na treść filmu, zostaw to nam. Pamiętaj, że profesjonalna realizacja video to nie tylko nasza praca, ale również forma sztuki, którą chcemy dzielić się ze światem.
            </p>
            </Component>
        </div>
    </ContentBackdrop>
}

export default Offer