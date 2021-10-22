import React, { useEffect, useReducer, useRef, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TYPES from "../../../constants/cntJapanese";
import styled from "styled-components";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  Typography,
  TextField,
  Paper,
  Grid,
  Autocomplete,
  Box,
} from "@mui/material";
import { reducerJapaneseSearchBar } from "../../../reducers/reducerJapaneseSearchBar";
import CONST_JAP from "../../../constants/cntJapanese";

export const SearchBar = ({ cboItems, handleSearch }) => {
  const styles = {
    input: {
      backgrounColor: "white",
      color: "white",
    },
  };
  const initState = {
    type: null,
    q: "",
    page: 1,
    genreOptions: [],
    genreDisabled: true,
  };
  const [searchParameters, dispatch] = useReducer(
    reducerJapaneseSearchBar,
    initState
  );
  const { type, q, page, genreDisabled, genreOptions } = searchParameters;
  const errorQ = searchParameters.q.length < 3;
  const errorPage = searchParameters.page < 1;
  useEffect(() => {
    setTimeout(() => {
      if (
        searchParameters.type != null &&
        searchParameters.q.length > 2 &&
        searchParameters.page > 0
      ) {
        handleSearch(searchParameters);
      }
    }, 1000);
  }, [type, q, page]);
  console.log("bolena" + genreDisabled);
  return (
    <Container>
      <Paper elevation={3}>
        <Grid
          container
          direction="row"
          columnSpacing={3}
          justifyContent="center"
          direction="row"
          px={3}
          py={3}
        >
          <Grid item>
            <Autocomplete
              id="typeSelector"
              options={CONST_JAP.types}
              getOptionLabel={(option) => option.name}
              sx={{ width: 200 }}
              onChange={(event, typeSelected) => {
                const type = typeSelected && typeSelected.name;
                let genreOptions = [];
                let genreDisabled = true;
                if (CONST_JAP.anime === type) {
                  genreOptions = [
                    ...CONST_JAP.genres.shared,
                    ...CONST_JAP.genres.anime,
                  ];
                  genreDisabled = false;
                  console.log(genreDisabled);
                } else if (CONST_JAP.manga === type) {
                  genreOptions = [
                    ...CONST_JAP.genres.shared,
                    ...CONST_JAP.genres.manga,
                  ];
                  genreDisabled = false;
                }
                dispatch({
                  type: CONST_JAP.SET_TYPE,
                  payload: {
                    type,
                    genreDisabled,
                    genreOptions,
                  },
                });
              }}
              renderInput={(params) => <TextField {...params} label="Type *" />}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="nameText"
              label="Nombre"
              variant="standard"
              helperText="Required"
              error={errorQ}
              helperText={errorQ && "Must be greater than 2 letters"}
              onChange={({ target: { value } }) => {
                dispatch({ type: CONST_JAP.SET_Q, payload: { q: value } });
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="pageText"
              label="Page"
              variant="standard"
              defaultValue={1}
              type="number"
              error={errorPage}
              helperText={errorPage && "Can't be less than 1"}
              onChange={({ target: { value } }) => {
                dispatch({
                  type: CONST_JAP.SET_PAGE,
                  payload: { page: parseInt(value, 10) },
                });
              }}
            />
          </Grid>
          <Grid item>
            <Autocomplete
              id="genreSelector"
              freeSolo
              disabled={genreDisabled}
              options={genreOptions}
              getOptionLabel={(option) => option.name}
              sx={{ width: 200 }}
              onChange={(event, newType) => {
                console.log(newType);
                dispatch({
                  type: CONST_JAP.SET_TYPE,
                  payload: { type: newType && newType.label },
                });
              }}
              renderInput={(params) => <TextField {...params} label="Genre" />}
            />
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ flexDirection: "row" }}>
        <LocalOfferIcon />
      </Box>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 5%;
`;
const styleSheet = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    width: "100%",
  },
});

/*
--si selecciona uno que se quedero
--si selecciona 2 q se cambie a various
*/
