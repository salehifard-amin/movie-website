import styled from "styled-components";
import { primaryTheme } from "../../../GlobalStyles/themes";
const {small,medium,large, xLarge} = primaryTheme.viewports
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, ${({$props}) => $props});
  transition: opacity 0.2s ease; 
  z-index: -1; 
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 60%);
    pointer-events: none;
    z-index: -10;
    @media screen and (max-width:${small}){
        display: none;
    }
  }
`;