import { Alert, Typography } from "@mui/material";
import { Error, Warning, CheckCircle, TimerOff } from "@mui/icons-material";
import { red, yellow, green } from "@mui/material/colors";
const CustomAlert = ({
  message,
  typoVariant,
  color,
  iconSize,
  alertVariant,
  icon,
}) => {
  const loadIcon = () => {
    if (icon === "Error") {
      return <Error fontSize={iconSize} sx={{ color: red[500] }} />;
    } else if (icon === "TimerOff") {
      return <TimerOff fontSize={iconSize} sx={{ color: red[500] }} />;
    } else if (icon === "Warning") {
      return <Warning fontSize={iconSize} sx={{ color: yellow[500] }} />;
    } else {
      return <CheckCircle fontSize={iconSize} sx={{ color: green[500] }} />;
    }
  };
  return (
    <Alert
      icon={loadIcon()}
      variant={alertVariant}
      sx={{
        borderColor: color[500],
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={typoVariant} component="div" color={color[500]}>
        {message}
      </Typography>
    </Alert>
  );
};
export { CustomAlert };
