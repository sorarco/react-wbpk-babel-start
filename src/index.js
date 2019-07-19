import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { red, grey } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
class App extends React.Component {
  render() {
    const style = {
      background: red[900]
    };
    const sty_button = {
      root: {
        "& label.Mui-focused": {
          color: "green"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "green"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "red"
          },
          "&:hover fieldset": {
            borderColor: "yellow"
          },
          "&.Mui-focused fieldset": {
            borderColor: "green"
          }
        }
      }
    };
    return (
      <div>
        Teste
        <TextField
          label="Custom CSS"
          variant="outlined"
          id="custom-css-outlined-input"
          style={sty_button}
        />
      </div>
    );
  }
}

// export default function App() {
//   return (
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));
