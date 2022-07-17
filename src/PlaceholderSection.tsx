import styled from "styled-components/macro";

const HalfScreenSection = styled.section`
    height: 50%;
    background: ${props => props.theme === "dark" ? "black": "white"};
    color: ${props => props.theme === "dark" ? "#FFD700": "#08E8DE"};
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

const HeaderText = styled.h1`
    text-align: center;
    padding: 0.5em;
    font-size: 2rem;
`;

type ThemeType = "light" | "dark";

function PlaceholderSection(props:{theme?: ThemeType}) {
    return(
        <HalfScreenSection theme={props.theme}>
            <HeaderText>ESL Inspire</HeaderText>
            <HeaderText>Sarah Maharajah</HeaderText>
        </HalfScreenSection>
    )
}

export default PlaceholderSection;