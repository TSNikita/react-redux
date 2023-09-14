import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerProductCard = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  //cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px black;
  }
`

export const ContainerContent = styled.div`
width: 550px;
`

export const TitleStyle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`

export const ImageContainer = styled.img`
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 3px;
`

export const ContainerImgDescp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const P_Style = styled.p`
width: 350px;
`

export const PriceStyle = styled.h3`
text-align: left;
  margin-left: 38px;
`

export const StyledLink = styled(Link)`
text-decoration: none;
  color: black;
`