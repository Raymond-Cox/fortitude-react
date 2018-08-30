import styled from 'styled-components';
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px;
  max-height: calc(100vh - 81px);
  min-width: 200px;
  width: 20vw;
  background-color: #333333;
  margin: 0;
  overflow: auto;
    @media (max-width: 768px) {

    }
`;
export const CategoryList = styled.ul`
  margin: 0;
  padding: .5em;
  text-align: center;

  .sideNavLink {
    display: flex;
    flex-direction: column;
    padding: .75em 0 .75em 0;
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-family: 'satisfy', cursive;
  }

  .thumbnail {
    max-width: 80%;
    min-height: 175px;
    max-height: 250px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
    display: none;
    }
  }
`;
export const ExpandBackground = styled.div`
  background-color: #1a1a1a;
  display: none;
    @media (max-width: 768px) {
      display: block;
    }
`;
export const ExpandForeground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  height: 100%;
  border-radius: 0px 50% 50% 0px;
  color: white;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;