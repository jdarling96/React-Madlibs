import React, { useState } from "react";
import MadlibForm from "./MadlibForms";
import MadlibStories from "./MadlibStories";
import Story from "./Story";

const Madlib = () => {
    //const [storyChosen, setStoryChosen] = useState(false)
    const [storyMade, setStoryMade] = useState(false)
    const [story, setStory] = useState()
    const [madlib, setMadlib] = useState({})

    const initialStory = (initial) => {
       setMadlib(initial)
       console.log(madlib)
    }
    
    const createStory = (formData) => {
        const {noun, adjective, color, noun2} = formData
        console.log(noun)
        
        setStory(`${madlib[Object.keys(madlib)[0]].p1} ${noun} ${adjective} ${color} ${noun2}`)
            console.log(story)
           
        
        console.log(story)
        setStoryMade(storyMade => (
            !storyMade
        ))

    }

    const resetStory = () => {
        setStoryMade(storyMade => (
            !storyMade
        ))
        setStory("")
    }

    return (
        <>
        <h1>Madlibs!</h1>
        <MadlibStories initialStory={initialStory}/>
        {storyMade === false ?
        <MadlibForm createStory={createStory} />
        :
        <Story story={story} reset={resetStory} />
}
        </>

    )

}

export default Madlib