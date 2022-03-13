import React, {useEffect, useRef} from "react";
import lottie from 'lottie-web';
import styled from "styled-components";

const StyledDrink = styled.div`
    width: 500px;
    height: auto;
`

function LottieDrinkAnimation(){
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData: require('/Users/amandapipare/Desktop/React Project/react-project/lekcija-03/src/lotties/drink-animation.json')
        })
    }, [])

    return(
        <StyledDrink className="container" ref={container}></StyledDrink>
    );

}

export default LottieDrinkAnimation;

