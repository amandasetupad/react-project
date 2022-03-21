import styled from "styled-components";

const ToolsWrapper = styled.div`
  width: 19rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  justify-content: center;
  margin: 1rem;

  background: #09273f;
  color: #ffffff;
  box-shadow: rgb(0 0 0 / 25%) 0px 3px 6px 0px;
  padding: 32px;
  border-radius: 8px;
  width: 100%;

  .icon-wrapper {
    width: 7rem;
    height: 7rem;
    margin: auto;
    border-radius: 50%;
    user-select: none;
    background-color: #398eea;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    text-align: center;
    color: #e5ff60;
    font-size: 24px;
  }
`;

const Tools = ({ title, src, text }) => {
  return (
    <ToolsWrapper>
      <div className="icon-wrapper">{src}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </ToolsWrapper>
  );
};

export default Tools;
