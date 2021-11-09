import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  ThemeProvider,
} from "@mui/material";
export const JapaneseItem = ({ srcImg, title }) => {
  return (
    <Card>
      <CardMedia component="img" height="300" image={srcImg} alt={title} />
      <CardContent>
        <Typography variant="subtitle1" component="div" sx={{ height: "50px" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
