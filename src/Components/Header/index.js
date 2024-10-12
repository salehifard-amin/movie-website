import { Link } from "react-router-dom"
import GlobalStyle from "../../GlobalStyles"
import menuItemsArray from "../../Helpers/arrays/headerMenu"

export default function Header() {

    const renderFarm = () => {
        return menuItemsArray.map( ( {title} ) => {
            return (
                <Link to = "/" > {title} </Link>
            )
        })
    }

    return (
        <div className="header">
            <GlobalStyle />
            <div className="container">
                <div className="menu">
                    <div className="logo"></div>
                    <div className="menu-items"> {renderFarm()} </div>
                </div>
                <div className="search-subscribe"></div>
            </div>
        </div>
    )
}