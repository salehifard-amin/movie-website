import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const {gray, green} = primaryTheme.colors
export const SearchStyled = styled.div`
color: ${gray.dark};
    .search-query {
        font-size: 20px;
        font-weight: 500;
        color: ${green.dark};
    }
`