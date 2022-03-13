import styled from "styled-components";

const StyledPostsContainer = styled.div`
    width: 100%;
    max-width: 64rem;
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: space-between;
    margin:auto;
    
`

const StyledPosts = styled.div`
    background: #e0f7ff;
`


const PostsContainer = ({children}) => {
    return (
        <StyledPosts>
            <StyledPostsContainer>{children}</StyledPostsContainer>
        </StyledPosts>
        
    )
    
}

export default PostsContainer;