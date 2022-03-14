import NavButton from "./NavButton/NavButton";
// import NavButton from "../NavButton/NavButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '/Users/amandapipare/Desktop/React Project/react-project/lekcija-03/src/files/cocktail-logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faHistory, faPlus, faUser} from "@fortawesome/free-solid-svg-icons";

const NavMenu = styled.nav`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #398EEA;

    .logo-wrapper{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 700;
        min-width: 300px;
        justify-content: space-between;
    }
    a{
        color: white;
        font-size: 1rem;
        line-height: 1.5;
        -webkit-tap-highlight-color: transparent;
        padding: 12px 16px;
    }

    .nav-wrapper{
        display: flex;
        justify-content: space-between;

        div{
            padding: 12px 16px;
            line-height: 1.5;
        }
    }
`

const Logo = styled.div`
    width: 6rem;
    height: 6rem;

    img{
        width: auto;
        height: 5rem;
    }
`


const Nav = () => {
    return (
        <NavMenu>
            <div className="logo-wrapper">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo>
                    <img src={logo} />
                    </Logo>
                </Link>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div title="Home">Home</div>
                </Link>

                <Link to="/all-recipes" style={{ textDecoration: 'none' }}>
                    <NavButton title="All recipes" />
                </Link>

            </div>

            <div className="nav-wrapper">
                <div><FontAwesomeIcon color='#ffffff' icon={faPlus} size="lg" /></div>
                <div><FontAwesomeIcon color='#ffffff' icon={faUser} size="lg" /></div>
            </div>

        </NavMenu>
    )
}

export default Nav;

// tad, kad mums ir viens pats html element iekavas nav nepieciesamas