import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box, Alert, CircularProgress } from "@mui/material";
import {
  Error,
  Warning,
  SignalWifiStatusbarConnectedNoInternet4,
  CheckCircle,
} from "@mui/icons-material";
import { yellow, blue, green, red } from "@mui/material/colors";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { fetchSearch } from "../../../helpers/getJapaneseStuff";
import { JapaneseItem } from "../JapaneseItem";
export const JapaneseSearchPage = () => {
  const [response, setResponse] = useState({
    loading: false,
    status: 100,
    message: "sdsd",
    results: [],
  });
  const { loading, status, message, results } = response;

  const showResults = () => {
    return (
      <Grid
        columnSpacing={4}
        rowSpacing={0}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {results.length > 0 ? (
          results.map((elm) => {
            return (
              <Grid item sm={6} md={4} lg={3} key={elm.mal_id}>
                <JapaneseItem srcImg={elm.image_url} title={elm.title} />
              </Grid>
            );
          })
        ) : (
          <p>nada</p>
        )}
      </Grid>
    );
  };
  const handleSearch = useCallback((type, q, page, genres) => {
    fetchSearch(type, q, page, genres).then((res) => {
      console.log("trae los resultaoss");
      console.log(res);
      setResponse(res);
    });
  }, []);

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <Box px={3} py={1}>
        {loading && <CircularProgress color="success" />}
        {status > 399 && (
          <Alert
            icon={<Error fontSize="large" sx={{ color: red[500] }} />}
            variant="outlined"
            sx={{ borderColor: red[500], width: "20%", margin: "auto" }}
          >
            <ErrorAlertSpan> {message}</ErrorAlertSpan>
          </Alert>
        )}
        {status == -1 && (
          <Alert
            icon={
              <SignalWifiStatusbarConnectedNoInternet4
                fontSize="large"
                sx={{ color: red[500] }}
              />
            }
            variant="outlined"
            sx={{ borderColor: red[500], width: "20%", margin: "auto" }}
          >
            <ErrorAlertSpan> {message}</ErrorAlertSpan>
          </Alert>
        )}
        {!results.length && status > 100 && status < 400 && (
          <Alert
            icon={<Warning fontSize="large" sx={{ color: yellow[500] }} />}
            sx={{ borderColor: yellow[500], width: "20%", margin: "auto" }}
            variant="outlined"
          >
            <WarningAlertSpan> {message}</WarningAlertSpan>
          </Alert>
        )}
        {status == 100 && (
          <Alert
            icon={<CheckCircle fontSize="large" sx={{ color: blue[500] }} />}
            sx={{ borderColor: blue[500], width: "20%", margin: "auto" }}
            variant="outlined"
          >
            <InformationAlertSpan>So far so good</InformationAlertSpan>
          </Alert>
        )}
        {showResults()}
      </Box>
    </Container>
  );
};
/*STYLES*/
const Container = styled.div`
  width: 85%;
`;
const AlertSpan = styled.span`
  font-size: 17pt;
`;
const ErrorAlertSpan = styled(AlertSpan)`
  color: red;
`;
const WarningAlertSpan = styled(AlertSpan)`
  color: yellow;
`;
const InformationAlertSpan = styled(AlertSpan)`
  color: blue;
`;
