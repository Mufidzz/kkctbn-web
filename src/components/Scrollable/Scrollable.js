import React, {useState} from 'react'

const Scrollable = props => {
    const {children} = props
    const [mainDiv, setMainDiv] = useState(0);

    const getWidth = e => {
        if (e && mainDiv <= 0) {
            setMainDiv(e.clientWidth)
        }
    }

    return (
        <div ref={getWidth} style={{width:"100%"}}>
            <div style={{width: mainDiv, overflow: "auto"}}>
                {children}
            </div>
        </div>
    )
}

export default Scrollable;