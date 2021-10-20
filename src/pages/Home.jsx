import React from "react";
import Options from "./components/Options";
import { makeStyles } from "@mui/styles";
import RegeneratePasswordButton from "./components/RegenerateButton";
import { Paper, Container } from "@mui/material";
import { PasswordDisplay } from "./components/PasswordDisplay";
import { BoxedThemeToggle } from "./components/BoxedThemeToggle";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    margin: "auto",
    display: "flex",
  },
}));
const initialOptions = {
  lowercase: true,
  uppercase: true,
  specialCharacters: true,
  numbers: true,
  passwordLength: 10,
};
const initialPassword = generatePassword(initialOptions);
function generatePasswordIndexes(passwordLength, max) {
  const intMax = 2 ** 32 - 1;
  const numbersArray = window.crypto.getRandomValues(
    new Uint32Array(passwordLength)
  );

  const passwordIndexes = numbersArray.map((i) =>
    Math.floor((max * i) / (intMax + 1))
  );
  return passwordIndexes;
}
function getCharacters(options) {
  // password character set
  const lowerAlphas = "qwertyuiopasdfghjklzxcvbnm";
  const upperAlphas = lowerAlphas.toUpperCase();
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+=-;:/?";

  const allCharacters = [];
  if (options.lowercase === true) {
    allCharacters.push(lowerAlphas);
  }
  if (options.uppercase === true) {
    allCharacters.push(upperAlphas);
  }
  if (options.specialCharacters === true) {
    allCharacters.push(special);
  }
  if (options.numbers === true) {
    allCharacters.push(numbers);
  }

  const charactersPool = allCharacters.join("");

  return charactersPool;
}
function generatePassword(options) {
  const charactersPool = getCharacters(options);
  const indexes = generatePasswordIndexes(
    options.passwordLength,
    charactersPool.length
  );
  const chars = [];
  indexes.forEach((idx) => chars.push(charactersPool[idx]));
  console.log(chars);
  const password = chars.join("");
  return password;
}
export function Home() {
  const [options, setOptions] = React.useState(initialOptions);
  const [password, setPassword] = React.useState(initialPassword);

  function handleNewOptions(newOptions) {
    setOptions(newOptions);
    const newPassword = generatePassword(newOptions);
    setPassword(newPassword);
  }

  return (
    <div className="App" style={{ paddingTop: 110 }}>
      <BoxedThemeToggle />
      <Container style={{ paddingTop: 110 }} maxWidth="sm" m={10}>
        <Paper
          elevation={10}
          outlined
          square
          m={20}
          style={{ background: "#eceff1" }}
        >
          <Options handleNewOptions={handleNewOptions} options={options} />
          <PasswordDisplay
            handleNewOptions={handleNewOptions}
            password={password}
          />
        </Paper>
        <RegeneratePasswordButton
          handleNewOptions={handleNewOptions}
          options={options}
        />
      </Container>
    </div>
  );
}
