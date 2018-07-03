import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 3%;
  padding: 5% 10%;
  background-color: lightgrey;
  color: #333333;
    .extraHeight {
      line-height: 30px;
      margin-top: 0;
    }
`;

export const ContactForm = styled.div`
display: flex;
flex-direction: column;
font-size: 18px;
margin: 0 3em;
  form {
    font-weight: bold;
    font-size: 16px;
  }
  .bold {
    font-weight: bold;
  }
  input {
  height: 25px;
  width: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
  }
  textarea {
    width: 400px;
    height: 200px;
  }
  .sendButton {
    width: 80px;
    background-color: #03A89E;
    color: white;
    font-weight: bold;
    
  }
`

export const ContactInfo = styled.div`
display: flex;
flex-direction: column;
  p {
    margin-bottom: 0;
    font-size: 18px;
  }
  .header {
    font-size: 18px;
    color: #ED4337;
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
    padding-right: .5em;
    color: #333333;
    transition: .2s color linear;

    :hover {
      color: #ED4337;
    }
  }
`