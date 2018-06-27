import styled, { keyframes } from 'styled-components';

const PhotoChange = keyframes`
  0% {
    opacity: 0;
    animation-timing-function: ease-in; }
  8% {
    opacity: 1;
    animation-timing-function: ease-out; }
  33% {opacity: 1;}
  40% {opacity: 0;}
  100% {opacity: 0;}
`;
export const PhotoBackground = styled.ul`
  position: fixed;
  margin: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  list-style-type: none;
    .Slideshow:after {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 0;
      list-style-type: none;
    }
    .img-rotate {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      color: transparent;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: none;
      opacity: 0;
      z-index: 0;
      animation: ${PhotoChange} 18s linear infinite 0s;
    }
  .img-1 {
  background-image: url(https://webdesignbyraymond.com/fortitudephotos/portfolio/1.jpg);
  }
  .img-2 {
  background-image: url(https://webdesignbyraymond.com/fortitudephotos/portfolio/2.jpg);
  background-size: cover;
  background-position: 50% 10%;
  animation-delay: 6s;
  }
  .img-3 {
  background-image: url(https://webdesignbyraymond.com/fortitudephotos/portfolio/3.jpg);
  background-position: 50% 10%;
  animation-delay: 12s;
  }
  .no-cssanimations .Slideshow li span {
  opacity: 1; }
`;