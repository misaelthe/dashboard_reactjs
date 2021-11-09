import { useCallback, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { yellow, red } from "@mui/material/colors";
import styled from "styled-components";
import { fetchSearch } from "../../../helpers/getJapaneseStuff";
import { CustomAlert } from "../../utilities/CustomAlert.js";
import { SearchBar } from "./SearchBar";
import { JapaneseItem } from "../JapaneseItem";
export const JapaneseSearchPage = () => {
  //HOOKS
  const [response, setResponse] = useState({
    loading: false,
    status: 100,
    message: "",
    results: [],
    icon: "",
  });
  //VARIABLES
  const { loading, status, message, results, icon } = response;
  //METHODS
  const checkResponse = () => {
    if (status > 399) {
      return false;
    } else if (!results.length && status < 400 && status > 100) {
      return false;
    }
    return true;
  };
  const showResults = () => {
    return (
      <Grid
        columnSpacing={4}
        rowSpacing={1}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {results.map((elm) => {
          return (
            <Grid item sm={6} md={4} lg={3} key={elm.mal_id}>
              <JapaneseItem srcImg={elm.image_url} title={elm.title} />
            </Grid>
          );
        })}
      </Grid>
    );
  };
  //HANDLERS
  const handleSearch = useCallback((type, q, page, genres) => {
    setResponse((response) => ({ ...response, loading: true }));
    fetchSearch(type, q, page, genres).then((res) => {
      setResponse(res);
    });
  }, []);

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <Box px={3} py={1} component="div" display="flex" justifyContent="center">
        {loading ? (
          <CircularProgress color="success" />
        ) : checkResponse() ? (
          showResults()
        ) : (
          <CustomAlert
            message={message}
            alertVariant="outlined"
            color={icon === "Warning" ? yellow : red}
            iconSize="large"
            typoVariant="h4"
            icon={icon}
          />
        )}
      </Box>
    </Container>
  );
};
/*STYLES*/
const Container = styled.div`
  width: 85%;
`;
