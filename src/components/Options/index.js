import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import "./index.css";
import {withStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";




// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

function Options() {
 
  const [state, setState] = React.useState({
    checkedA:true,
    checkedB:true,
    checkedC:true,
    checkedD:true,
  });

  const handleChange = (event)=> {
    setState({...state, [event.target.name]:event.target.checked})
  }

  return <div className = "Options-body">
<FormGroup row >
  <FormControlLabel
  control={<Checkbox checked={state.checkedA} onChange=
  {handleChange} name = "checkedA"/>}
  label="lowercase letters"/>
  <FormControlLabel
  control={<Checkbox checked={state.checkedB} onChange=
  {handleChange} name = "checkedB"/>}
  label="uppercase letters"/>
  </FormGroup>

  <FormGroup row>
  <FormControlLabel
  control={<Checkbox checked={state.checkedC} onChange=
  {handleChange} name = "checkedC"/>}
  label="special characters"/>
  <FormControlLabel
  control={<Checkbox checked={state.checkedD} onChange=
  {handleChange} name = "checkedD"/>}
  label="numbers"/>
</FormGroup>

  </div>;
};

export default Options;
