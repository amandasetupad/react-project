import styled from "styled-components"

const StyledError = styled.div`
    background: pink;
`

const ErrorPage = () => {
    return <StyledError>404</StyledError>
}

export default ErrorPage;