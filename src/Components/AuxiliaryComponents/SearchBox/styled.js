import { AutoComplete } from "antd";
import styled from "styled-components";
import { primaryTheme } from "../../../GlobalStyles/themes";
const {small, medium, large} = primaryTheme.viewports;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width:${small}) {
    width: 100%;
    align-items: stretch;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 20px;
  margin-left: 8px;
  margin-right: 22px;
`;

export const SearchBar = styled.div`
  max-width: ${({ $isVisible }) => ($isVisible ? "400px" : "0")};
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: max-width 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
  @media screen and (max-width:${small}) {
    max-width: ${({ $isVisible }) => ($isVisible ? "200px" : "0")};
  }
`;


export const StyledAutoComplete = styled(AutoComplete)`

  .ant-select-selector:has(#auto-comp) {
    background-color: #cfcfcf ;
    transition: background-color 0.3s ease;
    @media screen and (max-width:${small}){
      max-width: 200px;
    }
    
    &:focus-within {
      background-color: #fff;
    }
  }

  .ant-select-selector .ant-input {
    background-color: transparent;
  }
`;
