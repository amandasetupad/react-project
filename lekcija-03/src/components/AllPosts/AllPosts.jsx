import styled from "styled-components";
import { useEffect, useReact, useState } from "react";
import PostsContainer from "./PostsContainer/PostsContainer";

const StyledPosts = styled.div`

    //syntax like in scss
    img{
        width: 30%;
        height: 30%;
        margin: auto;
    }

    h5 {
        text-align: center;
        
    }

    p{

    }
`
const RowContainer = styled(StyledPosts)`
width: 19rem;
height: 19rem;
border: 1px solid #111111;
display: flex;
flex-direction: column;
aligh-items: center;
justify-content: center;
margin: 1rem;
`


const AllRecipes = () => {
  const [postData, setPostData] = useState(null)

  //useEffect(() => { function call when component is mounted }, [dependency array] )
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(console.error("There's an error"));
  }, [])

  return (
    <PostsContainer>
      {/* ternary operator */}
      {postData ? (
        postData.drinks.map((post) => {
          return (
              <RowContainer key={post.idDrink}>
                <h5>{post.strDrink}</h5>
                <img src={post.strDrinkThumb} alt={post.strDrink} />
                <p>{post.strInstructions}</p>
              </RowContainer>
          )
        })
      ) : (<div>loading ...</div>)}
    </PostsContainer>
  )

}

export default AllRecipes;


