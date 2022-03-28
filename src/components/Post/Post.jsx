import styled, { css } from "styled-components";

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

const RowContainer = styled(StyledPosts)`
  width: 19rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  justify-content: center;
  margin: 1rem;

  ${(props) =>
    props.primary &&
    css`
      width: 19rem;
      height: 28rem;
    `}
`;

const Post = ({ data }) => {
  return (
    <RowContainer primary key={data.idDrink}>
      <Title>{data.strDrink}</Title>
      <Image src={data.strDrinkThumb} alt={data.strDrink} />
      <Description>{data.strInstructions}</Description>
    </RowContainer>
  );
};
export default Post;
