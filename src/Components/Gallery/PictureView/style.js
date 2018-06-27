import styled from 'styled-components';

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #1a1a1a;
  min-width: calc(80vw - 32px);
  min-height: calc(100vh - 113px);
  .picture-grids {
  display: grid;
  grid: auto / auto auto auto;
}
  .picture-grids div {
    display: flex;
    justify-content: center;
  }
  .individual-picture img {
    width: 300px;
    height: 400px;
    padding: 1em;
  }
`;
export const Title = styled.p`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  color: white;
  font-family: 'satisfy', cursive;
  font-size: 2em;
`;

export const TestImg = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 600px;
  overflow: hidden;
  border: 1px solid blue;

  .test-sizing {
    flex: none;
    max-width: none;
  }
`;
