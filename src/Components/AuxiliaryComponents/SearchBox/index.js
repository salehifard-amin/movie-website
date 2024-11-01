import { useState } from "react";
import {  Link, useSearchParams } from "react-router-dom";
import { Row, Col, AutoComplete } from "antd";
import { myApi } from "../../../Helpers/BaseUrl/baseApi";
import baseImgUrl from "../../../Helpers/BaseUrl/baseImage";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { SearchContainer, StyledAutoComplete } from "./styled";
import { Icon } from "./styled";
import { SearchBar } from "./styled";

const SearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [ setQueryString] = useSearchParams("");
  const [options, setOptions] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [serachIcon, setSearchIcon] = useState(true);

  const query = (event) => {
    if(!event) {
      setOptions([]);
      setOpenDropdown(false);
    }
    if (event.length >= 3 && event !== null) {
      myApi
        .get(`/search/movie?query= ${event}`)
        .then((response) => {
          let myOptions = response.data.results.map(
            ({
              id,
              poster_path,
              first_air_date,
              release_date,
              name,
              title,
              profile_path,
            }) => {
              return {
                key: id,
                label: (
                  <Row className="label-holder">
                    <Col>
                      <Link to={`/movies/${id}`}>
                        <img
                          className="label-img"
                          src={
                            poster_path
                              ? `${baseImgUrl.w92}${poster_path}`
                              : `${baseImgUrl.w92}${profile_path}`
                          }
                          alt={title || name}
                        />
                        <div>
                          {release_date
                            ? release_date.slice(0, 4)
                            : first_air_date?.slice(0, 4) || ""}
                        </div>
                        <div className="search-title">
                          {title ? title : name}
                        </div>
                      </Link>
                    </Col>
                  </Row>
                ),
                value: title,
              };
            }
          );
          setOptions(myOptions);
          if (myOptions.length > 0) {
            setOpenDropdown(true);
          }
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  };


  const toggleIcon = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchIcon(!serachIcon);
  };
  return (
    <SearchContainer>
      <SearchBar $isVisible={isSearchVisible}>
        <StyledAutoComplete
          id="auto-comp"
          style={{
            width: "30vw",
            height: "auto",
          }}
          onSearch={query}
          placeholder="Search here"
          options={options}
          open={openDropdown}
          onBlur={() => setOpenDropdown(false)}
          allowClear
        />
      </SearchBar>
      <Icon onClick={toggleIcon}>
        {serachIcon ? <SearchOutlined /> : <CloseOutlined />}
      </Icon>
    </SearchContainer>
  );
};
export default SearchBox;
