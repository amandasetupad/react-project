import React from "react";
import Wave from "react-wavify";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import styled from "styled-components";
import LottieDrinkAnimation from "./LottieDrinkAnimation";
import Cards from "./Cards";
import RecentPosts from "./RecentPosts";



const StyledHome = styled.div`
    background-color: #398EEA;

    .main-wrapper{
        display: flex;
    }

    .wave-wrapper{
        display: flex;
    }
`


function Home() {
    return (
        <>
        <StyledHome id="home">
            <div className="main-wrapper">
            <div className ="title-wrapper">
            <HeaderContainer />
            
            </div>
            <div className ="lottie-wrapper">
            <LottieDrinkAnimation/>
            </div>
            </div>
            
            <div className = "wave-wrapper">
            <Wave
                className="wave"
                fill="url(#gradient)"
                paused={false}
                options={{
                    height: 45,
                    amplitude: 40,
                    speed: 0.2,
                    points: 7
                }}
            >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(45)">
                        <stop offset="10%" stopColor="#398EEA" />
                        <stop offset="70%" stopColor="#e0f7ff" />
                    </linearGradient>
                </defs>
            </Wave>
            </div>
            

        </StyledHome>
        <Cards/>
        <RecentPosts/>
             </>   
        
    );
}


export default Home;