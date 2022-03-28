import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

import HeaderButton from "./HeaderButton.jsx/HeaderButton";

const HeaderContainerStyle = styled.div`
  max-width: 40rem;
  padding: 64px 16px 64px 16px;
  margin: 2rem 2rem;
`;

const StyledTitle = styled.h1`
  color: #e0f7ff;
  font-size: 3rem;
  text-align: left;
`;

const StyledSpan = styled.span`
  color: #e5ff60;
  font-weight: bold;
  font-size: 3rem;
  border-bottom: 8px solid rgba(146, 39, 245, 0.1);
  margin: 0;
  text-align: left;
`;

const StyledText = styled.p`
  text-align: left;
  font-size: 20px;
  color: #0c2c00;
`;

const SyledButton = styled.div`
  float: left;
`;

const HeaderContainer = () => {
  return (
    <>
      <HeaderContainerStyle>
        <StyledTitle>
          Learn cocktail recipes <br /> to
          <StyledSpan>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                " get f*cked up.",
                " enjoy yourself.",
                " be happy.",
                " surprise someone.",
              ]}
            />
          </StyledSpan>
        </StyledTitle>
        <StyledText>
          If you're looking for drinking inspiration or want to try something
          new, you came to the right place! Search for cocktail recipes or post
          your own and share knowledge with others!
        </StyledText>
        <SyledButton>
          <HeaderButton />
        </SyledButton>
      </HeaderContainerStyle>
    </>
  );
};

export default HeaderContainer;
