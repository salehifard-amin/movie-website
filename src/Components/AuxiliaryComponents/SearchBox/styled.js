import { AutoComplete } from "antd";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 22px;
`;

export const SearchBar = styled.div`
  max-width: ${({ $isVisible }) => ($isVisible ? "400px" : "0")};
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: max-width 0.4s ease, opacity 0.4s ease;
  overflow: hidden;
`;


export const StyledAutoComplete = styled(AutoComplete)`
  .ant-select-selector:has(#auto-comp) {
    background-color: #cfcfcf ;
    transition: background-color 0.3s ease;
    
    &:focus-within {
      background-color: #fff;
    }
  }

  .ant-select-selector .ant-input {
    background-color: transparent;
  }
`;
