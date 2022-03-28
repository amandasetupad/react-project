import styled from "styled-components";
import { useEffect, useState } from "react";

import Post from "../Post/Post";

const StyledPostsContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const StyledPosts = styled.div`
  background: #e0f7ff;
`;



const AllRecipes = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch(console.error("There's an error"));
  }, []);

  return (
    <StyledPosts>
      <StyledPostsContainer>
        {postData ? (
          postData.drinks.map((post) => {
            return (
              <Post key={post.idDrink} data ={post}/>
            );
          })
        ) : (
          <div>loading ...</div> )}
      </StyledPostsContainer>
    </StyledPosts>
  );
};

export default AllRecipes;
