import styled from "styled-components";
import { Link } from "react-router-dom";

import NavButton from "./NavButton/NavButton";
import React from "react";
import logo from "../../../src/assets/cocktail-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const NavMenu = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #398eea;
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  min-width: 300px;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
  padding: 12px 16px;
`;

const Logo = styled.div`
  width: 6rem;
  height: 6rem;

  img {
    width: auto;
    height: 5rem;
  }
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIcons = styled.div`
  padding: 12px 16px;
  line-height: 1.5;
`;

const Nav = () => {
  return (
    <NavMenu>
      <StyledLogoWrapper>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <img src={logo} />
          </Logo>
        </NavLink>

        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div title="Home">Home</div>
        </NavLink>

        <NavLink to="/all-recipes" style={{ textDecoration: "none" }}>
          <NavButton title="All recipes" />
        </NavLink>
      </StyledLogoWrapper>

      <StyledNav>
        <StyledIcons>
          <FontAwesomeIcon color="#ffffff" icon={faPlus} size="lg" />
        </StyledIcons>
        <StyledIcons>
          <FontAwesomeIcon color="#ffffff" icon={faUser} size="lg" />
        </StyledIcons>
      </StyledNav>
    </NavMenu>
  );
};

export default Nav;
