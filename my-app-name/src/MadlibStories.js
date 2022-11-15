  import React, {useState} from "react";

const MadlibStories = ({initialStory}) => {


    const INITIAL_STATE = {
       story: story.split("/")
        
    }

    
    
    
    const [story, setStory] = useState({})

    const handleClick = (e) => {
        console.log(e.target.value)
        const {value} = e.target
        setStory(value)
        
   

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        initialStory(story)
        setStory(INITIAL_STATE)

    }

    return (
        <form onSubmit={handleSubmit}>
           <label>Choose a Story!</label>
           <select value={story} onChange={handleClick} >
            <option value={story.s1}>there was a noun color adjective noun2</option>
            <option value={story.s2}>In a color house there was a adjective noun who loved noun2</option>
           </select>
           <button>Choose!</button>
        </form>


    )

} 

export default MadlibStories