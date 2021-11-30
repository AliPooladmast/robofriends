import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div id='Scrolling_Bar'>{props.children}</div>
    )
}

export default Scroll;