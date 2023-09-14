import styled from "styled-components";

export const DivContainer = styled.div`
  position: relative;
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  box-shadow: 0 0 8px;
`

export const DivWrapperInfo = styled.div`
width: 800px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleStyle = styled.div`
  width: 494px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`

export const ImgStyle = styled.img`
  width: 250px;
  height: 300px;
`
export const DescStyle = styled.div`
  width: 500px;
font-size: 20px;
  font-weight: lighter;
  margin-bottom: 40px;
`

export const DivRattingStyle = styled.div`
  width: 200px;
  height: 69px;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-around;
`

export const DivPrice = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

export const TitleRating = styled.div`
  padding: 0px;
  margin: 0px;
  color: brown;
  display: flex;
  align-items: center;
  width: 113px;
  justify-content: space-between;
`

export const TitleCount = styled.p`
padding: 0;
  margin: 0;
  color: green;
`
export const ButtonStyleBak = styled.button`
width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid gold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
  
  &:hover {
    background-color: gold;
  }
`

export const ButtonStyleBuy = styled.button`
width: 150px;
  height: 40px;
  border: 1px solid gold;
  border-radius: 10px;
  background-color: transparent;
  position: absolute;
  bottom: 29px;
  right: 60px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: gold;
  }
`