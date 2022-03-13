import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    background: #09273f;
    color: white;
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 1rem 0rem;
    width: 11rem;
    border: 2px solid #09273f;
    font-size: 1rem;
    line-height: 1.75;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

`

const HeaderButton = () => {
    return (
        <Link to="/all-recipes">
            <Button>
                See all recipes
            </Button>
        </Link>
    )
}

export default HeaderButton;