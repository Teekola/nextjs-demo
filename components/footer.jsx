import styled from "styled-components"

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: tomato;
`

export default function Footer() {
    return (
        <StyledFooter>Footer</StyledFooter>
    )
}