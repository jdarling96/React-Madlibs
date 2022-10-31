import React, { useState } from "react";
import MadlibForm from "./MadlibForms";
import MadlibStories from "./MadlibStories";
import Story from "./Story";

const Madlib = () => {
    //const [storyChosen, setStoryChosen] = useState(false)
    const [storyMade, setStoryMade] = useState(false)
    const [story, setStory] = useState([])

    const initialStory = (initial) => {
        setStory(story => ([ 
            ...story, initial.split(" ")
        ]))
        console.log(story)
    }
    
    const createStory = (formData) => {
        const {noun, adjective, color, noun2} = formData
        const updateStory = story.map(s => {
            const prevNoun = s.indexOf('noun')
            const prevAdjective = s.indexOf('adjective')
            const prevColor = s.indexOf('color')
            const prevNoun2 = s.indexOf('noun2')
            s[prevNoun] = noun
            s[prevAdjective] = adjective
            s[prevColor] = color
            s[prevNoun2] = noun2
            return story
        })
        setStory(updateStory)
        console.log(story)
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
        <MadlibStories initialStory={initialStory}/>
        {storyMade === false ?
        <MadlibForm createStory={createStory} />
        :
        <Story story={story.join(" ")} reset={resetStory} />
}
        </>

    )

}

export default Madlib