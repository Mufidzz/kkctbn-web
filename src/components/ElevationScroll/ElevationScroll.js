import React from 'react'
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";

const ElevationScroll = props => {
    const { children, trigger } = props;


    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    trigger: PropTypes.func.isRequired,
};


export default ElevationScroll;