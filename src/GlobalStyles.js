import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    font-family: "poppins";
}
*,*::after,
*::before {
    box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-weight: 500;
}
a {
    text-decoration: none;
    text-transform: capitalize;
    color: inherit;
}
ol,
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.flex {
    display: flex;
}
.justify-between {
    justify-content: space-between;
}
.justify-center {
    justify-content: center;
}
.flex-column {
    flex-direction: column;
}
.align-center {
    align-items: center;
}
.flex-wrap {
    flex-wrap: wrap;
}

.text-center {
    text-align: center;
}
.col-1 {
    width: 8.33%;
}
.col-2 {
    width: 16.66%;
}
.col-3 {
    width: 25%;
}
.col-4 {
    width: 33.33%;
}
.col-5 {
    width: 41.66%;
}
.col-6 {
    width: 50%;
}
.col-7 {
    width: 58.33%;
}
.col-8 {
    width: 66.66%;
}
.col-9 {
    width: 75%;
}
.col-10 {
    width: 83.33%;
}
.col-11 {
    width: 91.66%;
}
.col-12 {
    width: 100%;
}
.padding-section {
    padding-top: 120px;
    padding-bottom: 120px;
}
.mt-30 {
    margin-top: 30px;
}
.mb-30 {
    margin-bottom: 30px;
}
.mt-60 {
    margin-top: 60px;
}
.mb-60 {
    margin-bottom: 60px;
}
.mb-80 {
    margin-bottom: 80px;
}
.pl-20 {
    padding-left: 20px;
}
.pr-20 {
    padding-right: 20px;
}
.pl-30 {
    padding-left: 30px;
}
.pr-30 {
    padding-right: 30px;
}
.font-18 {
    font-size: 18px;
}
.font-20 {
    font-size: 20px;
}
.font-26 {
    font-size: 26px;
}
.font-30 {
    font-size: 30px;
}
.font-40 {
    font-size: 40px;
}
.f-weight-300 {
    font-weight: 300;
}
.uppercase {
    text-transform: uppercase;
}
.capitalize {
    text-transform: capitalize;
}
.opacity07 {
    opacity: 0.7;
}
.white {
    color: #fff;
}
.black {
    color: #000;
}
.bg-gray {
    background-color: #fafafa;
    border-top: 1px solid #e0e0e0;
}
.bg-green {
    background-color: #65c0ba;
}
.bg-light {
    background-color: #fafafa;
}
.bg-black {
    background-color: #1a1a1a;
}
.pos-relative {
    position: relative;
}
.width-100 {
    width: 100%;
    height: auto;
}

`;
export default GlobalStyle;