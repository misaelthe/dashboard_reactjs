import React, { useEffect, useReducer } from "react";

import {
  JP_ANIME_GENRES,
  JP_MANGA_GENRES,
  JP_REDUCER,
  JP_TYPES,
  JP_UNITS,
} from "../../../constants/cntJapanese";
import styled from "styled-components";
import { LocalOffer, CheckCircle } from "@mui/icons-material";
import { TextField, Paper, Grid, Autocomplete, Box, Chip } from "@mui/material";
import { reducerJapaneseSearchBar } from "../../../reducers/reducerJapaneseSearchBar";

export const SearchBar = ({ handleSearch }) => {
  const initState = {
    type: null,
    q: "",
    page: 1,
    genreOptions: [],
    genreDisabled: true,
    selectedGenres: [],
  };
  const [searchParameters, dispatch] = useReducer(
    reducerJapaneseSearchBar,
    initState
  );
  const { type, q, page, genreDisabled, genreOptions, selectedGenres } =
    searchParameters;
  const errorQ = searchParameters.q.length < 3;
  const errorPage = searchParameters.page < 1;

  useEffect(() => {
    console.log("se ejecuto :(");
    setTimeout(() => {
      if (type != null && q.length > 2 && page > 0) {
        handleSearch(type.toLowerCase(), q, page, selectedGenres);
      }
    }, 2000);
  }, [type, q, page, selectedGenres, handleSearch]);
  //EVENT HANDLERS
  const handleChangeType = (event, typeSelected) => {
    const type = typeSelected && typeSelected.name;
    let genreOptions = [];
    let genreDisabled = true;
    if (JP_UNITS.anime === type) {
      genreOptions = JP_ANIME_GENRES;
      genreDisabled = false;
    } else if (JP_UNITS.manga === type) {
      genreOptions = JP_MANGA_GENRES;
      genreDisabled = false;
    }
    dispatch({
      type: JP_REDUCER.SET_TYPE,
      payload: {
        type,
        genreDisabled,
        genreOptions,
      },
    });
  };
  const handleChangeGenre = (event, genres) => {
    dispatch({
      type: JP_REDUCER.SET_GENRE,
      payload: { selectedGenres: genres },
    });
  };
  const handleDeleteGenre = (id) => {
    dispatch({
      type: JP_REDUCER.REMOVE_GENRE,
      payload: { id_genre: parseInt(id) },
    });
  };

  return (
    <Container>
      <Box my={1}>
        <Paper elevation={3}>
          <Grid
            container
            direction="row"
            columnSpacing={3}
            justifyContent="center"
            p={6}
          >
            <Grid item>
              <Autocomplete
                id="typeSelector"
                options={JP_TYPES}
                getOptionLabel={(option) => option.name}
                sx={{ width: 200 }}
                onChange={(event, typeSelected) =>
                  handleChangeType(event, typeSelected)
                }
                renderInput={(params) => (
                  <TextField {...params} label="Type *" />
                )}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="nameText"
                label="Nombre"
                variant="standard"
                error={errorQ}
                helperText={errorQ && "Must be greater than 2 letters"}
                onChange={({ target: { value } }) => {
                  dispatch({ type: JP_REDUCER.SET_Q, payload: { q: value } });
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
                    type: JP_REDUCER.SET_PAGE,
                    payload: { page: parseInt(value, 10) },
                  });
                }}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id="genreSelector"
                freeSolo
                multiple
                limitTags={2}
                disabled={genreDisabled}
                options={genreOptions}
                value={selectedGenres}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                onChange={(event, options) => {
                  handleChangeGenre(event, options);
                }}
                renderInput={(params) => (
                  <TextField {...params} multiline={false} label="Genre" />
                )}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Grid item>{option.name}</Grid>
                      <Grid item>
                        {selectedGenres.includes(option) && (
                          <CheckCircle style={{ color: "#34373C" }} />
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box my={1}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          p={1}
        >
          {selectedGenres.length > 0 && (
            <>
              <Grid item>
                <LocalOffer />
              </Grid>
              {selectedGenres.map((genre) => {
                return (
                  <Grid item key={genre.id}>
                    <Chip
                      clickable
                      label={genre.name}
                      variant="outlined"
                      onDelete={() => handleDeleteGenre(genre.id)}
                    />
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 5%;
`;
