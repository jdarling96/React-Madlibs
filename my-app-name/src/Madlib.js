import React, { useState } from "react";
import MadlibForm from "./MadlibForms";
import Story from "./Story";

const Madlib = () => {
    const [storyMade, setStoryMade] = useState(false)
    const [story, setStory] = useState("")
    
    const createStory = (formData) => {
        setStory(story => (
            story = `There was a ${formData.color} ${formData.noun}
             who loved a ${formData.adjective} ${formData.noun2}`
        ))
        setStoryMade(storyMade => (
            !storyMade
        ))

    }

    const resetStory = () => {
        setStoryMade(storyMade => (
            !storyMade
        ))
    }

    return (
        <>
        <h1>Madlibs!</h1>
        {storyMade === false ?
        <MadlibForm createStory={createStory} />
        :
        <Story story={story} reset={resetStory} />
}
        </>

    )

}

export default Madlib