import React from 'react';

const userInput = (props) => {
    return <input type="text" onChange={props.input} value={props.username} />
};

export default userInput;