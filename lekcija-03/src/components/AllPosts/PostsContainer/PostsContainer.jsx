import styled from "styled-components";

const StyledPostsContainer = styled.div`
    width: 100%;
    max-width: 64rem;
    display:flex;
    flex-direction: ${props => props.direction ? "row" : "column"}
    align-items:center;
`

const PostsContainer = ({children}) => {
    return <StyledPostsContainer>{children}</StyledPostsContainer>
}

export default PostsContainer;