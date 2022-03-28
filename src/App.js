import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Header,
  ImageContainer,
  ImageText,
  Search,
  TextContainer,
  SearchWrapper,
  Input,
  GridBox,
  GridItem,
  ImageWrapper,
  Title,
  Main,
  Text,
} from "./style";

const ProductImage = styled.div`
  width: 300px;
  height: 300px;
  margin-top: ${({ top }) => top || 0};
  margin-left: -2px;
  border-radius: 4px;
  object-fit: cover;
  padding: 0;
  background-size: contain;
  background: ${(props) => `url(${props.imgUrl})`};
`;

const App = () => {
  const axios = require("axios");
  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchedOptions, setSearchedOptions] = useState(data);
  console.log(data, "data");
  const getData = () => {
    axios
      .get("http://www.omdbapi.com/?apikey=dceaab5a&s=batman")
      .then((response) => {
        return setData(response.data.Search);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <Fragment>
      <Main>
        <Header>
          <TextContainer>
            <Text> MyTestApp</Text>
          </TextContainer>
        </Header>
        <ImageContainer>
          <ImageText>
            Watch <br /> something <br /> incredible.
          </ImageText>
        </ImageContainer>
        <Search>Search</Search>
        <SearchWrapper>
          <Input
            value={searchInput}
            onChange={(e) => searchItems(e.target.value)}
          />
        </SearchWrapper>
        <Search margin="48px 0 0 77px">{`BatMan`}</Search>
        <GridBox>
          {searchInput.length > 0 ? filteredResults.map((item, index) => {
                return (
                  <div key={index}>
                  <GridItem radius={"8px"}>
                    <ImageWrapper justifyContent="center">
                      <ProductImage imgUrl={item?.Poster}>
                        <Title>{item.Title}</Title>
                      </ProductImage>
                    </ImageWrapper>
                  </GridItem>
                </div>
                )
          })
            : data.map((item, index) => {
               return (
                <div key={index}>
                <GridItem radius={"8px"}>
                  <ImageWrapper justifyContent="center">
                    <ProductImage imgUrl={item?.Poster}>
                      <Title>{item.Title}</Title>
                    </ProductImage>
                  </ImageWrapper>
                </GridItem>
              </div>
               )
            })}
        </GridBox>
      </Main>
    </Fragment>
  );
};

export default App;
