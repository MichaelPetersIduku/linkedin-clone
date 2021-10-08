/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Hiring in a hurry -</a></h5>
                <p>Find talented pros in record time with upwork and keep the business moving</p>
            </Section>
            <Layout>
                <LeftSide/>
                <Main/>
                <RightSide/>
            </Layout>
            
        </Container>
    )
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
    margin-left: 16px;
    margin-right: 16px;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    margin-top: 20px;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
        color: #0a66c2;
        font-size: 14px;

        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: 300px auto 300px;
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-rows: auto; */
    margin: 0 0;
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Home;