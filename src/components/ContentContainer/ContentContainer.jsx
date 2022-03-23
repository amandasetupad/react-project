import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #e0f7ff;
  margin: 0;

  h3{
    min-height: 3rem;
    margin: 0;
  }

  p{
    min-height: 4rem;
  }
`;

const ContentContainer = (props) => {
  const { children } = props;

  return (
    <ContentWrapper className="content-wrapper">{children}</ContentWrapper>
  );
};

export default ContentContainer;
