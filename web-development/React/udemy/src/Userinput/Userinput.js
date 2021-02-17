import React from 'react';

const Userinput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.username} />
        </div>
    )
}

export default Userinput;