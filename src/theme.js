import { createTheme } from "@material-ui/core/styles";
import { pink, teal, lime, purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: purple,
    secondary: teal,
  },
});

export default theme;
