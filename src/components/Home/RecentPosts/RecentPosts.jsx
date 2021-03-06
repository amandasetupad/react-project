import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledPostsContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const StyledTitle = styled.h2`
  margin: 0;
  padding-top: 3rem;
`;

const StyledPosts = styled.div`
  background: #e0f7ff;
`;

const RowContainer = styled.div`
  width: 19rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  justify-content: center;
  margin: 1rem;
`;

const Image = styled.img`
  max-width: 16rem;
  height: auto;
  margin: auto;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
  font-size: 16px;
  color: #0c2c00;
  min-height: 3rem;
`;

const Title = styled.h5`
  text-align: center;
  font-size: 18px;
  color: #0c2c00;
`;

const RecentPosts = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => setPostData(data.drinks.slice(3)))
      .catch(console.error("There's an error"));
  }, []);

  return (
    <StyledPosts>
      <StyledTitle>Recent Posts</StyledTitle>
      <StyledPostsContainer>
        {postData ? (
          postData.map((post) => {
            return (
              <RowContainer primary key={post.idDrink}>
                <Title>{post.strDrink}</Title>
                <Image src={post.strDrinkThumb} alt={post.strDrink} />
                <Description>{post.strInstructions}</Description>
              </RowContainer>
            );
          })
        ) : (
          <div>loading ...</div>
        )}
      </StyledPostsContainer>
    </StyledPosts>
  );
};

export default RecentPosts;
