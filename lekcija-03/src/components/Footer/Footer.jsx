import { Link } from "react-router-dom";
import Wave from "react-wavify";
import styled from "styled-components";


const StyledFooter = styled.div`
padding: 80px 60px;
display:flex;
justify-content: space-between;


    .copyright{
        color: #0c2c00;
    }

    button{

    }
`

const StyledWave = styled.div`
background: #e0f7ff;
display: flex;
`

const Footer = () => {
    return (
        <>
        <StyledWave>
        <Wave
            className="wave"
            fill="#ffffff"
            paused={false}
            options={{
                height: 45,
                amplitude: 40,
                speed: 0.2,
                points: 7
            }}
        />
        </StyledWave>
        
        <StyledFooter>
            
            <div className="copyright">© 2022 Another One. All Rights reserved.</div>
            <div>
                <button>Home</button>
                <button>About us</button>
                <button>Contact us</button>
            </div>

        </StyledFooter>
        </>
    )
}

export default Footer;