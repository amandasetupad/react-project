import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledError = styled.div`
  background: url("https://www.pngkit.com/png/detail/798-7987663_picture-teenage-drinking-diary-of-a-parish-priest.png")
    no-repeat center;
  background-size: cover;
  width: 100%;
  height: 40rem;
`;

const StyledWrapper = styled.div`
  background: rgba(1, 1, 1, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledText1 = styled.div`
  color: #e5ff60;
  text-transform: uppercase;
  text-align: initial;
  padding: 2rem 7rem 0.5rem 1rem;
  font-size: 1.5rem;
`;

const StyledText2 = styled.div`
  color: blanchedalmond;
  text-align: initial;
  font-size: 1rem;
  padding: 0.5rem 7rem 0.5rem 1rem;
`;

const StyledNumber = styled.p`
  font-size: 15rem;
  margin: 0;
  font-weight: bold;
  color: white;
`;

const StyledButton = styled.button`
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #398eea;
  padding: 17px 60px;
  margin: 2rem auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #78c7d2;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  :hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;

const SpanStyle = styled.span`
  position: relative;
  z-index: 1;
`;

const ErrorPage = () => {
  return (
    <StyledError>
      <StyledWrapper>
        <StyledText1>oops... page is not found!</StyledText1>
        <StyledText2>This page is empty just like your drink.</StyledText2>
        <StyledNumber>404</StyledNumber>
        <StyledText2>
          Don't worry! Just follow the link below to back home page
        </StyledText2>
        <Link to="/" style={{ textDecoration: "none" }}>
        <StyledButton>
          <SpanStyle>Go back to Home Page</SpanStyle>
        </StyledButton>
        </Link>
        
      </StyledWrapper>
    </StyledError>
  );
};

export default ErrorPage;
