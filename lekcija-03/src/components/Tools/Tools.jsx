import styled from "styled-components";

const ToolsWrapper = styled.div`
    width: 19rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: center;
    margin: 1rem;
    

    //syntax like in scss
    img{
        width: 30%;
        height: 30%;
        margin: auto;
    }

    h3 {
        text-align: center;
        
    }
`


const Tools = ({title, src, text}) => {
    return (
        <ToolsWrapper>
            <img src={src} alt =""/>
            <h3>{title}</h3>
            <p>{text}</p>
        </ToolsWrapper>
        
    )
}

export default Tools;
