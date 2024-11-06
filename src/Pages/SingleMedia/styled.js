import styled from "styled-components";

export const StyledSingleMedia = styled.div`
  position: relative;
color: cornsilk;
  .backdrop-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 700px;
    z-index: -1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img.backdrop {
      width: 100%;
      height: auto;
      object-fit: cover;
      position: fixed;
      top: 0;
      left: 0;
    }
    .ant-skeleton .ant-skeleton-image .ant-skeleton-image-svg {
      width: 50vw;
      height: auto;
      max-height: 100vh;
    }
  }
`;
