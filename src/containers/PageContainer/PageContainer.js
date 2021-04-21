import header from "../../assets/images/fullImage.jpg"
import styled from "styled-components"
import classes from "./PageContainer.module.sass"
const Container = styled.div`
background-image: url("${header}");
height: "100vh";
background-position: right; 
background-repeat: no-repeat; 
background-size: cover; `



const PageContainer = (props) => {


    return (
        <Container className={classes.PageContainer}>
            {props.children}
        </Container>
    )
}

export default PageContainer