  import React, {useState} from "react";

const MadlibStories = ({initialStory}) => {


    const INITIAL_STATE = {
        s1:{p1:"In a ",
            p2:"house there was a",
            p3: "who loved "},
        
        s2:{p1:"the very ",
        p2:"there was a bright",
        p3: "who loved "}   
        
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