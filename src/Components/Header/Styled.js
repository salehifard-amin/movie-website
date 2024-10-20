import styled from "styled-components";
export const HeaderStyled = styled.div`
color: #fff;
background-color: #000;
.menu{
    width: 42%;
}
.menu .logo{
    margin-left: 65px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.menu .menu-items a {
    padding: 0 7px;
    font-size: 14px;
    transition: color 0.25s ease;
    &:hover {
        color: #faffb7;
    }
}
.search-subscribe {
    margin-right: 70px;
}
.search-subscribe .pipe {
    width: 3px;
    height: 20px;
    background-color: #fff;
    display:inline-block;
}
.search-subscribe .fa-icon {
    font-size:22px;
    padding: 0 20px;
}
/* .fa-magnifying-glass {
    font-size: 30px;
} */
`