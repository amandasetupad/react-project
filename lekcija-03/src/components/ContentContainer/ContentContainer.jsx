import styled from "styled-components";

const ContentWrapper = styled.div`
display: flex;
justify-content: center;
background: #e0f7ff;
`


const ContentContainer = (props) => {
    //destructuring
    const {children} = props;

    return (
        <ContentWrapper className = "content-wrapper">
            {children}
        </ContentWrapper>
    )
}

export default ContentContainer;