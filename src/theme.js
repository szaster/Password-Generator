import { createTheme } from "@material-ui/core/styles";
import { teal, purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: teal,
  },
});

export default theme;
