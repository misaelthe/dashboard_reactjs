import React, { useEffect, useReducer, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  JP_GENRES,
  JP_REDUCER,
  JP_TYPES,
  JP_UNITS,
} from "../../../constants/cntJapanese";
import styled from "styled-components";
import { LocalOffer, CheckCircle } from "@mui/icons-material";
import {
  Typography,
  TextField,
  Paper,
  Grid,
  Autocomplete,
  Box,
  Chip,
} from "@mui/material";
import { reducerJapaneseSearchBar } from "../../../reducers/reducerJapaneseSearchBar";

export const SearchBar = ({ cboItems, handleSearch }) => {
  const animeGenres = useRef(
    JP_GENRES.filter(
      (e) => e.type === JP_UNITS.shared || e.type === JP_UNITS.anime
    )
  );
  const mangaGenres = useRef(
    JP_GENRES.filter(
      (e) => e.type === JP_UNITS.shared || e.type === JP_UNITS.manga
    )
  );
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
  //EVENT HANDLERS
  const handleChangeType = (event, typeSelected) => {
    const type = typeSelected && typeSelected.name;
    let genreOptions = [];
    let genreDisabled = true;
    if (JP_UNITS.anime === type) {
      genreOptions = animeGenres.current.map((el) => {
        return { id: el.id, name: el.name, selected: false };
      });
      genreDisabled = false;
      console.log(genreDisabled);
    } else if (JP_UNITS.manga === type) {
      genreOptions = mangaGenres.current.map((el) => {
        return { ...el, selected: false };
      });
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
    //console.log(genres);
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
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                onChange={(event, newGenre) =>
                  handleChangeGenre(event, newGenre)
                }
                value={selectedGenres}
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
                        {option.selected && (
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
