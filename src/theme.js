import { createTheme } from "@material-ui/core/styles";
import {
  teal,
  green,
  red,
  deepPurple,
  amber,
  purple,
  yellow,
} from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: yellow,
  },
});

export default theme;
