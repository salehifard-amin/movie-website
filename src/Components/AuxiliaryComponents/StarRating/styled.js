import styled from "styled-components";

export const StyledStarRating = styled.div`
position: absolute;
top: 25px;
left: 25px;

  .star-rating {
    display: flex;
    flex-direction: column;
    gap: 1px;
    align-items: center;
    font-size: 20px;
  }

  .star {
    font-size: 20px;
    margin: -7px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.8),3px 5px 9px rgba(0,0,0,0.8);

    @media screen and (max-width:576px) {
        font-size: 18px;
    }
  }

  .full {
    color: gold;
  }

  .empty {
    color: lightgray;
  }

  .half {
    position: relative;
    color: lightgray;
    display: inline-block;
  }

  .half::before {
    content: "★";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: gold;
  }
`;
