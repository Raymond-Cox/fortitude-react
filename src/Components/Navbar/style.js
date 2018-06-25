import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100px;
  padding: 0;
`;
export const AwayNavbar = Navbar.extend`
  justify-content: space-between;
  height: 100px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin-top: 20px;
  list-style-type: none;
  width: 40%;
  height: 100%;
  font-size: 1.75rem;
  .NavbarLink {
    display: inline-block;
    color: white;
    text-shadow: 2px 2px black;
    padding: 0 .5em 0 .5em;
    font-family: 'Satisfy', cursive;
    font-weight: bold;
    text-decoration: none;
  };
  .NavbarLink:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: white;
    box-shadow: 1px 1px 2px black;
    transition: width .3s;
  }
  .NavbarLink:hover:after {
    width: 100%;
  }
`;
export const AwayList = List.extend`
  border: 1px solid orange;
  .NavbarLink {
    color: #333333;
    text-shadow: 1px 1px lightgrey;
  }
  .NavbarLink:after {
    background-color: #333333;
    box-shadow: 1px 1px 2px lightgrey;
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 30%;
  padding-left: 100px;
  margin-top: 20px;
  color: #333333;
  text-shadow: 1px 1px lightgrey;
  font-family: 'satisfy', cursive;
  border: 1px solid red;
`;

