import React, {useCallback, useState} from 'react';

import styled from "styled-components";

const ContainerDescription = styled.div`
    width: 350px;
`

interface DescriptionProps {
    title: string,
    maxLength: number
}

const ButtonStyled = styled.button`
    width: 100px;
    height: 20px;
    border: none;
    background-color: cadetblue;
    border-radius: 10px;
  cursor: pointer;
  color: white;
  margin-left: 225px;
  margin-top: 10px;
  &:hover {
    box-shadow: 0 0 3px darkgreen;
  }
`

const Description: React.FC<DescriptionProps> = ({title, maxLength}) =>  {
    const [visible, setVisible] = useState(false)
    const textStart = String(title).slice(0, 150)

    const handleVisible = useCallback(() => {
        setVisible(!visible)
    },[ visible])

    return (
        <ContainerDescription>
            {title !== undefined && title.length < maxLength && title}

            {!visible ? (title.length > maxLength &&
                    <>
                        <span>{textStart}...</span>
                        <ButtonStyled onClick={handleVisible }>Show Details</ButtonStyled>
                    </>
            ) : (
                <>
                    <span>{title}</span>
                    <ButtonStyled onClick={handleVisible }>Hide</ButtonStyled>
                </>
            )}

        </ContainerDescription>
    );
}

export default Description;