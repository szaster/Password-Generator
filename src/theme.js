import { createTheme } from "@material-ui/core/styles";
import {
  teal,
  green,
  red,
  deepPurple,
  amber,
  purple,
} from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    contrastText: amber[500],
    secondary: teal,
  },
});

export default theme;
