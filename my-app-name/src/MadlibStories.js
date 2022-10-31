import React, {useState} from "react";

const MadlibStories = ({initialStory}) => {

    
    
    
    const [story, setStory] = useState([])

    const handleClick = (e) => {
        const {value} = e.target
        setStory(value)
        
   

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        initialStory(story)

    }

    return (
        <form onSubmit={handleSubmit}>
           <label>Choose a Story!</label>
           <select value={story} onChange={handleClick} >
            <option value="there was a noun color adjective noun2">there was a noun color adjective noun2</option>
            <option value="">there was a noun color adjective noun2</option>
           </select>
           <button>Choose!</button>
        </form>
    )

}

export default MadlibStories