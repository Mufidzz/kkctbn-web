import React, {Fragment, useEffect, useMemo, useState} from "react";
import PropTypes from "prop-types";
import Page from "../Page";
import {STORAGE_KEY} from "../../configs/local_storage";
import jwt_decode from "jwt-decode"
import {useHistory} from "react-router-dom"
import {verify} from "jsonwebtoken";

const PrivateComponent = props => {
    const {whitelistKey, children} = props
    const history = useHistory()

    const [display, setDisplay] = useState(true)


    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY.JWT) !== null || localStorage.getItem(STORAGE_KEY.JWT) !== undefined) {
            const userRole = jwt_decode(localStorage.getItem(STORAGE_KEY.JWT))['ROLE-KEY']

            if (whitelistKey.find(e => e === userRole)) {

            } else {
                setDisplay(false)
            }
        } else {
            setDisplay(false)
        }



    },[whitelistKey])

    return (
        <div style={display ? {display: "inherit"} : {display: "none"}}>
            {children}
        </div>
    )
}

PrivateComponent.propTypes = {
    children: PropTypes.node,
    whitelistKey : PropTypes.array.isRequired
}

export default PrivateComponent