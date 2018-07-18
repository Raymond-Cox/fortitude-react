import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100px;
  padding: 0;
`;
export const HamburgerMenu = styled.div`
  @media (min-width: 577px) {
    display: none;
  }
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  height: 35px;
  width: 40px;
  border: 2px solid white;
  z-index: 2;
  border-radius: 5px;
  box-shadow: 1px 1px 2px black;
  .line {
    height: 5px;
    width: 35px;
    margin: 5px 2px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px black;
  }
  .x {
    display: block;
    font-size: 26px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px black;
    cursor: default;
  }
`;
export const AwayNavbar = Navbar.extend`
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid lightgrey;
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

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    display: none;
    position: absolute;
    left: 0;
    min-width: 100%;
    height: auto;
    text-align: center;
    padding-top: 25px;
    background-color: #333333;
  }
  .NavbarLink {
    display: inline-block;
    color: white;
    text-shadow: 2px 2px black;
    padding: 0 .5em 0 .5em;
    font-family: 'Satisfy', cursive;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 576px) {
      padding: .5em 0;
    }
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
export const AwayHamburgerMenu = HamburgerMenu.extend`
border-color: #333333;
box-shadow: 1px 1px 2px lightgrey;
  .line {
    background-color: #333333;
    box-shadow: 1px 1px 2px lightgrey;
  }
  .x {
    color: #333333;
    text-shadow: 1px 1px lightgrey;
  }
`
export const AwayList = List.extend`
@media (max-width: 576px) {
    background-color: lightgrey;
  }

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
  width: 50%;
  padding-left: 100px;
  margin-top: 20px;
  color: #333333;
  text-shadow: 1px 1px lightgrey;
  font-family: 'satisfy', cursive;
    :hover {
      cursor: default;
    }
  @media (max-width: 768px) {
    padding-left: 10px;
    width: 80%;
  }
  @media (max-width: 605px) {
    line-height: 35px;
    margin-top: 10px;
  }
`;

