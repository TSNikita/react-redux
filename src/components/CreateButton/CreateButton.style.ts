import styled from "styled-components";

export const ContainerSvg = styled.div`
width: 40px;
  height: 40px;
  border: 1px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 29px;
  right: 490px;
  cursor: pointer;
  &:hover {
    background-color: gold;
  }
`
export const Svg = styled.svg`
path {
  fill: black;
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
}
`