import styled from "styled-components";

export const SubscribeStyled = styled.div`
height: 75vh;
max-height: 610px;
background-image: url("./images/slider-hm4-4.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: #fff;
position: relative;
.subscribe-container {
    position: absolute;
    top: 20%;
    left: 8%;
    width: 100%;
}
h1 {
    font-size: 80px;
    font-weight: 900;
    text-shadow: 3px 10px 5px black, 5px 15px 10px #000000de, 5px 15px 20px #0000009e;
}
.bg-layer {
    background-color: rgba(0,0,0,0.3);
    display: inline-block;
    border-radius: 15px;
}
.price-holder h2 {
    margin: 10px 15px;
    font-size: 40px;
    font-weight: 700;
}
.price-holder .price-lined {
    color: red;
    text-decoration: line-through;
}
button {
    display: block;
    margin-top: 50px;
    font-size: 25px;
    font-weight: bold;
    height: auto;
}
`