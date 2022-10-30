import React, {useState} from "react";

const Story = ({story, reset}) => {

    return (
        <div>
            <p>{story}</p>
            <button onClick={reset}>Restart</button>
        </div>
    )

}

export default Story