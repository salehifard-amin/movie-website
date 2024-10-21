import styled from "styled-components";

export const HeroStyled = styled.div`
  width: 100%;
  height: 70vh;
  font-family: "poppins";
  /* margin-bottom: 30px; */
  li img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 0 -100px;
  }
  .hero-title {
    font-size: ${ ({fontProps}) => fontProps };
    display: block;
    position: absolute;
    top: 0;
    left: 5%;
    color: #eaeadd;
    margin-top: 4%;
    margin-left: 40px;
    width: 100%;
  }
  .hero-genres  {
    position: absolute;
    top: 83%;
    left: 10px;
    font-size: 20px;
    color: #fff;
    width: 100%;
    height: auto;
    color: aliceblue;
  }
  .watch-button {
    position: absolute;
    top: 150%;
    left: 0%;
    font-size: 26px;
    font-weight: bold;
    padding: 25px 7px;
    box-shadow: 3px 3px 2px rgba(0,0,0,0);
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 1px 1px 6px rgba(0,0,0,1);

    }
  }
`;

export const Arrow = styled.div`
  .swiper-button-next ,
  .swiper-button-prev {
    box-sizing: content-box;
    padding: 10px;
    
  }
`;
