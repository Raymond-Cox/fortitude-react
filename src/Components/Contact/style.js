import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 3%;
  padding: 2%;
  max-width: calc(100%-17px);
  background-color: lightgrey;
  color: #333333;
  font-family: 'Indie Flower', cursive;
    .headerinfo {
      max-width: 90%;
    }
    .extraHeight {
      line-height: 30px;
      margin-top: 0;
    }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm = styled.div`
display: flex;
flex-direction: column;
font-size: 20px;
margin: 0 3em;

@media (max-width: 768px) {
    width: 90%;
    margin: 0;
  }
  form {
    font-weight: bold;
    font-size: 20px;
  }
  .bold {
    font-weight: bold;
  }
  input {
  height: 25px;
  width: 90%;
  max-width: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
  }
  textarea {
    width: 90%;
    max-width: 400px;
    height: 200px;
  }
  .sendButton {
    width: 80px;
    color: #ED4337;
    border: none;
    background-color: inherit;
    font-size: 26px;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;
    
    :hover {
      cursor: pointer;
    }
  }
  .sendButton:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #ED4337;
    transition: width .3s;
  }
  .sendButton:hover:after {
    width: 100%;
  }
`

export const ContactInfo = styled.div`
display: flex;
flex-direction: column;
word-wrap: break-word !important;
@media (max-width: 768px) {
  width: 85%;
}
  p {
    margin-bottom: 0;
    font-size: 20px;
  }
  .header {
    font-size: 20px;
    color: #ED4337;
    font-weight: bold;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 1em 0em;
    padding: 0;
    box-shadow: 1px 1px 5px lightgrey;
  }
  .socialmedia {
    margin-top: 1em;
    font-size: 20px;
  }
  .socialmedia a {
    margin-right: .5em;
    padding-right: .5em;
    color: #333333;
    transition: .2s color linear;

    :hover {
      color: #ED4337;
    }
  }
`