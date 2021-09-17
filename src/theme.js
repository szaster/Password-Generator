import { createTheme } from "@material-ui/core/styles";
import {
  pink,
  yellow,
  red,
  teal,
  lime,
  purple,
  green,
} from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: teal,
  },
});

export default theme;
