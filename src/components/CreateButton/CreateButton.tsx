import React from 'react';
import styled from "styled-components";


const ContainerSvg = styled.div`
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
const Svg = styled.svg`
path {
  fill: black;
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
}
`

type CreateButtonPropsType = {
    onClick: () => void
}

const CreateButton: React.FC<CreateButtonPropsType> = ({onClick}) => {
    return (
        <ContainerSvg onClick={onClick}>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9394 10.0001L2.46973 3.53039L3.53039 2.46973L10.0001 8.9394L16.4697 2.46973L17.5304 3.53039L11.0607 10.0001L17.5304 16.4697L16.4697 17.5304L10.0001 11.0607L3.53039 17.5304L2.46973 16.4697L8.9394 10.0001Z"/>
            </Svg>
        </ContainerSvg>
    );
}

export default CreateButton;