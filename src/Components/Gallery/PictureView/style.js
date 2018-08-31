import styled from 'styled-components';

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #1a1a1a;
  min-width: calc(80vw - 32px);
  min-height: calc(100vh - 113px);
  @media (max-width: 768px) {
      position: absolute;
      left: 0;
      min-width: 100vw;
    }
`;
export const Title = styled.p`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgrey;
  color: white;
  font-family: 'satisfy', cursive;
  font-size: 2em;
`;

export const MainImg = styled.div`
  margin: 0 auto;
  height: 600px;
  width: 800px;
  border: 1px solid darkgrey;
  box-shadow: 1px 1px 15px white;
  @media (max-width: 768px) {
      height: 450px;
      width: 600px;
    }
`;
