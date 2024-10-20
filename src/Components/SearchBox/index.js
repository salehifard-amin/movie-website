import { useEffect, useState } from "react";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import { Row, Col, AutoComplete } from "antd";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { SearchOutlined , CloseOutlined } from "@ant-design/icons";
import { SearchContainer, StyledAutoComplete } from "./styled";
import { Icon } from "./styled";
import { SearchBar } from "./styled";

const SearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [queryString, setQueryString] = useSearchParams();
  const [options, setOptions] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [serachIcon , setSearchIcon ] = useState(true)

  const query = (event) => {
    if (event.length >= 3 && event !== null) {
      myApi
        .get(`/search/multi?query= ${event}`)
        .then((response) => {
          // document.title = `Search for ${event}`;
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
                          {release_date ? release_date : first_air_date}
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
          setQueryString(createSearchParams({ key: event }));
        })
        .catch((error) => {
          return "Wrong address";
        });
    }
  };

  useEffect(() => {
    const urlSearch = queryString.get("key");
    if (urlSearch) {
      myApi
        .get(`/search/multi?query= ${urlSearch}`)
        .then((response) => {
          const urlOptionUpdate = response.data.results.map(
            ({
              id,
              poster_path,
              first_air_date,
              release_date,
              name,
              title,
              profile_path,
            }) => ({
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
                      <div>{release_date ? release_date : first_air_date}</div>
                      <div className="search-title">{title ? title : name}</div>
                    </Link>
                  </Col>
                </Row>
              ),
              value: title || name,
            })
          );
          setOptions(urlOptionUpdate);
          if (urlOptionUpdate.length > 0) {
            setOpenDropdown(true);
          }
        })
        .catch((error) => {
          return "Wrong address";
        });
      console.log(queryString.get("key"));
    }
  }, []);

  const toggleIcon = () => {
    setIsSearchVisible(!isSearchVisible)
    setSearchIcon(!serachIcon)
  }
  return (
    <SearchContainer>
      <SearchBar isVisible={isSearchVisible}>
        <StyledAutoComplete id="aminz"
          style={{
            width: "400px",
            height: "auto",
          }}
          onSearch={query}
          placeholder="Search for media"
          options={options}
          open={openDropdown}
          onBlur={() => setOpenDropdown(false)}
          allowClear
        />
      </SearchBar>
      <Icon onClick={toggleIcon}>
        {(serachIcon ? <SearchOutlined /> : <CloseOutlined />)}
      </Icon>
    </SearchContainer>
  );
};
export default SearchBox;
