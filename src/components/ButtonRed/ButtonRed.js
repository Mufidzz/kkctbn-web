import React from "react";
import Button from "@material-ui/core/Button";

const ButtonRed = props => {
    const {...rest} = props

    return (
        <Button variant={"contained"} {...rest}>
            AAA
        </Button>
    )
}

export default ButtonRed;