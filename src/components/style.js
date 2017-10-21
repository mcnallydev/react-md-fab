import styled from 'styled-components';

export const FabTag = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #3b88c3;
  color: #FFF;
  border: 0;
  border-radius: 50px;
  text-align: center;
  font-size: 26px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
`;

export const Text = styled.span`
  display: block;
`;
