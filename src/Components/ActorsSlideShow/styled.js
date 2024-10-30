import styled from "styled-components";

export const ActorStyledContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background: linear-gradient(180deg, rgba(17,16,16,1) 0%, rgba(18,10,76,1) 50%, rgba(17,16,16,1) 100%);
  .actor-item {
    position: relative;
    width: 200px;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }
  .actor-details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    p {
      font-size: 20px;
      background-color: #12121278;
      color: #fff;
      padding: 0 5px;
    }
  }
`;

export const ActorsDetailsStyled = styled.div`
  .known-for-item {
    color: #fff;
    &:hover {
      color: #5179fb;
    }
  }
`;
