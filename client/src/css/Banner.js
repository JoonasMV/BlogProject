import styled from "styled-components"
import { darkPurple } from "./color"

export const Background = styled.div`
  background-color: #0d0d1a;
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  `
export const Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-size: 60px;
  color: white;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  padding-right: 10px;
  display: ${props => props.visible};
`

export const StyledButton = styled.button`
  border-radius: 15px;
  font-size: 15px;
  height: 45px;
  width: 80px;
  margin-left: 10px;
  border: 2px solid ${darkPurple};
  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${darkPurple};
    border: 2px solid white;
  }
`