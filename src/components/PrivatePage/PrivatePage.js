import React, {useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import Page from "../Page";
import {STORAGE_KEY} from "../../configs/local_storage";
import jwt_decode from "jwt-decode"
import {useHistory} from "react-router-dom"

const PrivatePage = props => {
    const {whitelistKey, children} = props
    const history = useHistory()


    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY.JWT) !== null || localStorage.getItem(STORAGE_KEY.JWT) !== undefined) {
            const userRole = jwt_decode(localStorage.getItem(STORAGE_KEY.JWT))['ROLE-KEY']

            if (whitelistKey.find(e => e === userRole)) {

            } else {
                history.push("/auth")
            }
        } else {
            history.push("/auth")
        }



    },[whitelistKey])

    return (
        children
    )
}

PrivatePage.propTypes = {
    children: PropTypes.node,
    whitelistKey : PropTypes.array.isRequired
}

export default PrivatePage