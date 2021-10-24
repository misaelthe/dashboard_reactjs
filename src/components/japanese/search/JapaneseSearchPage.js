import React, { useEffect, useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import { fetchSearch } from "../../../helpers/getJapaneseStuff";
import { JapaneseItem } from "../JapaneseItem";
import { Grid, Box } from "@mui/material";
import styled from "styled-components";
export const JapaneseSearchPage = () => {
  const [data, setData] = useState([]);
  const classes = styleSheet;

  const handleSearch = (type, q, page, genres) => {
    console.log("llamara al fetchsearc");

    fetchSearch(type, q, page)
      .then((res) => {
        console.log("trae los resultaoss");
        setData(res);
      })
      .catch((err) => {
        setData([]);
      });
  };
  return (
    <Container>
      <h1 className={classes.header}>Search</h1>
      <div>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Box component="div" marginX={7}>
        <Grid
          columnSpacing={4}
          rowSpacing={0}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {data.length != 0 ? (
            data.map((elm) => {
              return (
                <Grid item sm={6} md={4} lg={3} key={elm.mal_id} mx={0} my={2}>
                  <JapaneseItem srcImg={elm.image_url} title={elm.title} />
                </Grid>
              );
            })
          ) : (
            <p>nada</p>
          )}
        </Grid>
      </Box>
    </Container>
  );
};
const Container = styled.div`
  width: 85%;
`;
const styleSheet = {
  container: { width: "85%" },
  header: { color: "white" },
  nav: {
    width: "100%",
    height: "70px",
  },
  clmSearch: {
    width: "30%",
  },
  text: { color: "white" },
  overflow: { overflow: "hidden" },
};
