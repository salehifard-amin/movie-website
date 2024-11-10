import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const { gray, green } = primaryTheme.colors;
export const SearchStyled = styled.div`
  color: ${gray.dark};
  .search-query-holder {
    margin-left: 50px;
    .search-query {
      font-size: 20px;
      font-weight: 500;
      color: ${green.dark};
    }
  }

  .main-link {
    display: block;
    margin-top: 200px;
  }
  .content-wrapper {
    align-items: center;
    margin-bottom: 200px;
    background-color: ${gray.darkest};
    height: 300px;
    border-radius: 10px;
    img {
      border-radius: 15px;
      position: relative;
      left: -40px;
      box-shadow: 0.5px 2px 2px rgba(255, 255, 255, 0.5);
    }
    .content-details-holder {
      width: 50%;
      margin-left: -50px;
      .content-title {
        font-size: 20px;
        font-weight: 600;
        color: ${gray.light};
      }
      .publish-date {
      }
    }
  }
`;
