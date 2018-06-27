import styled from 'styled-components';
export const CategoryContainer = styled.div`
  max-height: calc(100vh - 81px);
  width: 20vw;
  background-color: #333333;
  margin: 0;
  overflow: auto;
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
    width: 80%;
    margin: 0 auto;
  }
`;