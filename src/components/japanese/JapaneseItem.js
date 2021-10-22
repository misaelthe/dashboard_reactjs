import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  ThemeProvider,
} from "@mui/material";
export const JapaneseItem = ({ srcImg, title }) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Card>
      <CardMedia component="img" height="300" image={srcImg} alt={title} />
      <CardContent>
        <ThemeProvider theme={theme}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
};
