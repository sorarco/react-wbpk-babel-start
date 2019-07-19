import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { green, purple } from '@material-ui/core/colors';
import CupPrimaryButton from "./components/CupPrimaryButton";
import WhiteTextField from "./components/WhiteTextField";
const styles = theme => ({
    "myCustomClass": {
        padding: 50,
        fontFamily: "Arial",
        background: "red"
    }
})

class MyComponent extends React.Component {

    _click = (event) => {
        console.log('clicado');
        console.log(event);
    }

    _editTextField = (event) => {
        console.log(event.target.value)
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.myCustomClass}>
                    <Button variant="contained">
                        Default
                    </Button>
                    <CupPrimaryButton onClick={this._click}>
                        Custom CSS
                    </CupPrimaryButton>
                    <WhiteTextField label="Custom CSS"
                        variant="outlined"
                        onChange={this._editTextField}
                        id="custom-css-outlined-input" />

                </div>
            </React.Fragment>
        )
    }
}


export default
    withStyles(styles)
        (MyComponent)