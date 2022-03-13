import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styled from "styled-components";
import HeaderButton from './HeaderButton.jsx/HeaderButton';

const HeaderContainerStyle = styled.div`


    .header-wrapper{
        max-width: 40rem;
        padding: 64px 16px 64px 16px;
        margin: 2rem 2rem;
    }

    h1{
        color:#e0f7ff;
        font-size: 3rem;
        text-align: left;
    }

    span{
        color: #e5ff60;
        font-weight: bold;
        font-size: 3rem;
        border-bottom: 8px solid rgba(146, 39, 245, 0.1);
        margin:0;
        text-align: left;
    }

    p{
        text-align: left;
        font-size: 20px;
        color: #0c2c00;
    }

    .button-wrapper{
        float: left;
    }
`

const HeaderContainer = () => {
    return (
        <>
        <HeaderContainerStyle>
            <div className = "header-wrapper">
                <h1>
                    Learn cocktail recipes <br/> to 
                    <span>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle = "|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={[' get fucked up.', ' enjoy yourself.', ' be happy.', ' surprise someone.']}
                        />
                    </span>
                </h1>
                <p>
                    If you're looking for drinking inspiration or want to try something new, you came to the right place! Search for cocktail recipes or post your own and share knowledge with others!
                </p>
                <div className = "button-wrapper">
                    <HeaderButton/>
                </div>
            </div>
        </HeaderContainerStyle>
        </>
        
    )
}

export default HeaderContainer;