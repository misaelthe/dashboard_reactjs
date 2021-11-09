import { useEffect, useReducer } from "react";
import {
  JP_ANIME_GENRES,
  JP_MANGA_GENRES,
  JP_REDUCER,
  JP_TYPES,
  JP_UNITS,
} from "../../../constants/cntJapanese";
//import styled from "styled-components";
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
  //VARIABLES
  const { type, q, page, genreDisabled, genreOptions, selectedGenres } =
    searchParameters;
  const errorQ = q.length < 3;
  const errorPage = page < 1;
  //HOOKS
  useEffect(() => {
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
    <>
      <Box p={2}>
        <Paper elevation={3}>
          <Box px={2} py={5}>
            <Grid
              container
              direction="row"
              columnSpacing={4}
              justifyContent="center"
            >
              <Grid item lg={3} sm={4}>
                <TextField
                  required
                  id="nameText"
                  label="Nombre"
                  variant="standard"
                  error={errorQ}
                  sx={{ width: "100%" }}
                  helperText={errorQ ? "Greater than 2 letters" : " "}
                  onChange={({ target: { value } }) => {
                    dispatch({ type: JP_REDUCER.SET_Q, payload: { q: value } });
                  }}
                />
              </Grid>
              <Grid item lg={2} sm={4}>
                <Autocomplete
                  id="typeSelector"
                  options={JP_TYPES}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, typeSelected) =>
                    handleChangeType(event, typeSelected)
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Type *" variant="standard" />
                  )}
                />
              </Grid>
              <Grid item lg={3} sm={4}>
                <Autocomplete
                  id="genreSelector"
                  freeSolo
                  multiple
                  disabled={genreDisabled}
                  options={genreOptions}
                  value={selectedGenres}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, options) => {
                    console.log(options);
                    handleChangeGenre(event, options);
                  }}
                  renderTags={(values) => {
                    const tags = [
                      <Chip
                        clickable
                        label={values[0].name}
                        key={values[0].name}
                        variant="outlined"
                        onDelete={() => handleDeleteGenre(values[0].id)}
                      />,
                    ];
                    if (values.length > 1) {
                      tags.push(
                        <Chip
                          clickable
                          label={`+${values.length - 1}`}
                          key={values.length}
                          variant="outlined"
                        />
                      );
                    }
                    return tags;
                  }}
                  disableListWrap={true}
                  renderInput={(params) => (
                    <TextField {...params} label="Genre" variant="standard" />
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
              <Grid item lg={1} sm={3}>
                <TextField
                  id="pageText"
                  label="Page"
                  variant="standard"
                  defaultValue={1}
                  type="number"
                  error={errorPage}
                  helperText={errorPage ? "Not less than 1" : " "}
                  onChange={({ target: { value } }) => {
                    dispatch({
                      type: JP_REDUCER.SET_PAGE,
                      payload: { page: parseInt(value, 10) },
                    });
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      {selectedGenres.length > 1 && (
        <Box px={2}>
          <Grid
            container
            columnSpacing={2}
            direction="row"
            justifyContent="flex-start"
          >
            <>
              <Grid item>
                <LocalOffer sx={{ color: "#808191" }} />
              </Grid>
              {selectedGenres.map((genre) => {
                return (
                  <Grid item key={genre.id}>
                    <Chip
                      clickable
                      label={genre.name}
                      variant="outlined"
                      sx={{
                        backgroundColor: "#808191",
                        borderWidth: "0px",
                        ":hover": {
                          color: "white",
                        },
                      }}
                      onDelete={() => handleDeleteGenre(genre.id)}
                    />
                  </Grid>
                );
              })}
            </>
          </Grid>
        </Box>
      )}
    </>
  );
};
